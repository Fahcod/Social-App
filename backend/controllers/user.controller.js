import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";
import notificationModel from "../models/notification.model.js";
import { getUserSocket, io } from "../utils/socket.js";
import { cloudinary } from "../utils/cloudinary.js";


//create user token
const createToken = (id) => {
    return jwt.sign({ id }, process.env.ACCESS_TOKEN_KEY, { expiresIn: '30d' });
}

//create user account
const createAccount = async (req, res) => {
    try {

        const { username, email, country, password } = req.body;

        //Check for the errors
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, message: "Please fill all the form fields" });
        }

        //Check for the email
        let emailCheck = await userModel.findOne({ email: email });

        if (emailCheck) {
            return res.json({ success: false, message: "This email is already taken" });
        }

        //If everything is okay, hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        let newUser = await new userModel({
            username: username,
            email: email,
            country: country,
            password: hashedPassword
        });

        let user = await newUser.save();

        //generate the token
        const token = createToken(user._id);

        //set the cookie
        res.cookie('schb', token, { httpOnly: true, secure: true, sameSite: 'none', maxAge: 1000 * 60 * 60 * 24 * 30 });
        res.status(201).json({ success: true, userId: user._id, message: "Account created successfully" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "An error occured" });
    }
}


//User login
const loginUser = async (req, res) => {
    try {

        const { username, email, password } = req.body;

        //Check for errors
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.json({ success: false, message: "Please fill all the fields" });
        }

        //Find the user
        let user = await userModel.findOne({ email: email, username: username });

        if (!user) {
            return res.json({ success: false, message: "User does not exist" });
        }

        //if the user exists, compare the password
        const passCompare = await bcrypt.compare(password, user.password);

        if (!passCompare) {
            return res.json({ success: false, message: "You entered a wrong password" });
        }

        //generate the token
        const token = createToken(user._id);

        //set the cookie
        res.cookie('schb', token, { httpOnly: true, secure: true, sameSite: 'none', maxAge: 1000 * 60 * 60 * 24 * 30 });
        res.status(201).json({ success: true, userId: user._id, message: "Logged in successfully" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "An error occured" });
    }
}


//Get the user data
const getUser = async (req, res) => {

    try {

        const { user_id } = req.body;

        //Find the user
        let result = await userModel.findById(user_id).populate("following", "username profile followers").populate("followers", "username profile followers").exec();

        res.status(200).json({ success: true, user: result });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "An error occured" });
    }
}

//Get all users
const getAllUsers = async (req, res) => {
    try {

        let result = await userModel.find().select("-password");

        res.status(200).json({ success: true, users: result });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "An error occured" });
    }
}

//Update the user profile
const updateProfile = async (req, res) => {
    try {

        const { user_id } = req.body;

        async function saveData(URL) {
            await userModel.updateOne({ _id: user_id }, { $set: { profile: URL } });
            res.json({ success: true, message: `Profile updated successfully` });
        }

        cloudinary.uploader.upload(req.file.path, function (err, result) {

            if (err) {
                return res.json({ success: false, message: "Error uploading image" });
            }

            saveData(result.secure_url);

        });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "An error occured" });
    }
}


//Follow user
const followUser = async (req, res) => {
    try {

        const otherId = req.params.otherId;
        const { user_id } = req.body;

        //Find both users//

        //The following user
        let user = await userModel.findById(user_id);

        //The followed user
        let other = await userModel.findById(otherId);

        //Find the user's following list
        let newFollowing = await user.following;

        //Find the other user's followers list
        let newFollowers = await other.followers;

        //Check if the user is already following the other user
        let checkFollowing = newFollowing.includes(otherId);

        if (checkFollowing) {
            return res.json({ success: false, message: "Aready following user" });
        } else {
            newFollowing.push(otherId);
            newFollowers.push(user_id);
        }

        await userModel.updateOne({ _id: user_id }, { $set: { following: newFollowing } }).exec();
        await userModel.updateOne({ _id: otherId }, { $set: { followers: newFollowers } }).exec();

        //Send a notification to the user
        const newNotify = new notificationModel({
            to: otherId,
            from: user_id,
            message: `Hi ${other.username}, you have a new follower, ${user.username} followed you`,
            tag: "New follower"
        });

        let data = await newNotify.save();

        //Get the user online
        const userSocketId = getUserSocket(otherId);

        if (userSocketId) {
            io.to(userSocketId).emit("new_notify", data);
        }

        res.json({ success: true, message: "Followed successfully" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "An error occured" });
    }
}

//User Adding a friend
const addFriend = async (req, res) => {
    try {
        const otherId = req.params.otherId;
        const { user_id } = req.body;
        //Find both users//
        //The requesting user
        let user = await userModel.findById(user_id);
        //The requested user
        let other = await userModel.findById(otherId);
        //Find the user's friend list
        let newFriends = await user.friends;
        //Find the other user's friend list
        let newOtherFriends = await other.friends;
        //Check if the user is already following the other user
        let checkFriends = newFriends.includes(otherId);

        if (checkFriends) {
            return res.json({ success: false, message: "Aready added as a friend" });
        } else {
            newFriends.push(otherId);
            newOtherFriends.push(user_id);
        }

        await userModel.updateOne({ _id: user_id }, { $set: { friends: newFriends } }).exec();
        await userModel.updateOne({ _id: otherId }, { $set: { friends: newOtherFriends } }).exec();

        res.json({ success: true, message: "Added friend successfully" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "An error occured" });
    }
}

//fetch user credentials for socket connection
const getSocketUser = async (req, res) => {
    try {

        const { user_id } = req.body;

        //Get the user
        let data = await userModel.findById(user_id).select("-country -password -followers -following -friends -email");

        res.json({ success: true, user: data });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "An error occured" });
    }
}

//Logout the user
const logOutUser = async (req, res) => {
    try {

        res.clearCookie("schb");
        res.json({ success: true });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "An error occured" });
    }
}


export { createAccount, logOutUser, getSocketUser, loginUser, getUser, getAllUsers, updateProfile, followUser, addFriend }
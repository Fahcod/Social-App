import express from "express";
import { addFriend, createAccount, followUser, getAllUsers, getSocketUser, getUser, loginUser, logOutUser, updateProfile } from "../controllers/user.controller.js";
import { check } from "express-validator";
import { tokenParser } from "../middleware/auth.js";
import { upload } from "../utils/multer.js";

//Declare the user router
const userRouter = express.Router();

//Validate the user's input
const signupValidation = [
    check('username').notEmpty().withMessage("Your full name is required"),
    check('email').notEmpty().isEmail().withMessage("Your is email is either invalid or empty"),
    check('country').notEmpty().withMessage("Your country is required"),
    check('password').notEmpty().withMessage("Your password is required"),
];

//Validate the user's input
const loginValidation = [
    check('username').notEmpty().withMessage("Your full name is required"),
    check('email').notEmpty().isEmail().withMessage("Your is email is either invalid or empty"),
    check('password').notEmpty().withMessage("Your password is required"),
];

userRouter.post('/signup',signupValidation,createAccount);
userRouter.post('/login',loginValidation,loginUser);
userRouter.get('/get-users',getAllUsers);
userRouter.get('/get-user',tokenParser,getUser);
userRouter.get('/get-user-soc',tokenParser,getSocketUser)

userRouter.put('/update-profile',upload.single("image"),tokenParser,updateProfile);
userRouter.put('/follow/:otherId',tokenParser,followUser);
userRouter.put('/add-friend/:otherId',tokenParser,addFriend);
userRouter.put('/logout',logOutUser);

export default userRouter;
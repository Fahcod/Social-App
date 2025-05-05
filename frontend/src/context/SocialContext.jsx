import {createContext,useEffect, useState} from "react";
import axios from "axios";
import {io} from "socket.io-client";
import { useDispatch,useSelector } from "react-redux";
import { setAllUsers } from "../features/usersSlice";
import { addNotification,setNotifications, setUserData } from "../features/userSlice";
import { addPost, addPostomment, setAllPosts } from "../features/postsSlice";
import { toast } from "react-toastify";
import { setOnlineFriends, setUserInfo } from "../features/userInfoSlice";
import { url } from "../utils/url";
import { showPostOptions } from "../features/modelSlice";
import { addMessage, addMessages } from "../features/messageSlice";
import { setAllChannels } from "../features/channelSlice";
import useFetch from "../hooks/useFetch";


export const SocialContext = createContext(null);

const CONN_ID = localStorage.getItem("CONN_ID_NUM");

const socket=io(url,{
    autoConnect:true,
    query:{
        room_id:CONN_ID
    }
});

const SocialContextProvider = (props) =>{
    
    axios.defaults.withCredentials=true;

    const dispatch = useDispatch();

    const [deletePostId,setDeletePostId]=useState("");

    const chatData = useSelector((state)=>state.user.current_chat);

    const userData = useSelector((state)=>state.user);

    //Fetch user Data
    const fetchUser = async ()=>{
    
        let response = await axios.get(`${url}/api/user/get-user`);

        if(response.data.success){

            const details = response.data.user;
            //Store the information in the userData

            dispatch(setUserData({
                _id:details._id,
                profile:details.profile,
                username:details.username,
                email:details.email,
                user_bio:details.user_bio
            }));

            //Store these arrays too in their slice
            dispatch(setUserInfo({
                followers:details.followers,
                following:details.following,
                friends:details.friends
            }));

        }else{
         let num = 0
        }
    }

     //Fetch all users Data
     const fetchAllUsers = async ()=>{
        let response = await axios.get(`${url}/api/user/get-users`);
        if(response.data.success){
            dispatch(setAllUsers(response.data.users));
        }else{
            console.log("Error fetching users");
        }
    }

    //Fetch all users Data
    const fetchAllPosts = async ()=>{
        let response = await axios.get(`${url}/api/posts/get-all`);
        if(response.data.success){
            dispatch(setAllPosts(response.data.posts));
        }else{
            console.log("Error fetching posts");
        }
    }

     //Fetch all communities
     const fetchAllCommunities = async ()=>{
        let response = await axios.get(`${url}/api/community/get`);
        if(response.data.success){
            dispatch(setAllChannels(response.data.data));

        }else{
            console.log("Error fetching channels");
        }
    }

   useEffect(()=>{

    const {data,error,success} = useFetch('api/community/get')

    if(success){
        console.log({info:data})
    }else{
        console.log(error)
    }

   },[])

    //Comment on a post
    const addComment = async(postId,text)=>{
        let response = await axios.post(`${url}/api/comments/comment/${postId}`,{
            comment:text,
            profile:userData.profile,
            username:userData.username
        });
        if(response.data.success){
        dispatch(addPostomment(response.data.data));
        fetchAllPosts();
        }else{
            toast.error(response.data.message);
        }
    }

     //Addd a friend
     const addFriend = async(friendId)=>{
        let response = await axios.put(`${url}/api/user/add-friend/${friendId}`);
        if(response.data.success){
        toast.success(response.data.message);
        fetchAllUsers();
        fetchUser();
        }else{
            toast.error(response.data.message);
        }
    }

    //Function to like a post
    const sendLike = async (postId)=>{
        let response = await axios.put(`${url}/api/posts/like-post/${postId}`);
        if(response.data.success){
        fetchAllPosts();
        }else{
            toast.error(response.data.message);
        }
    }

    //get only user posts
  function getUserPosts(posts,user){
    let myposts;
    const user_posts = posts.filter((item)=>{
    return item.owner._id === user._id
    });
    myposts = user_posts
    return myposts
  }

  //Get other user posts
   function getOtherPosts(posts,id){
    let myposts;
    const user_posts = posts.filter((item)=>{
    return item.owner._id === id
    });
    myposts = user_posts
    return myposts
}

  //Delete a post
  const deletePost = async (postId)=>{
    axios.defaults.withCredentials=true;
    let response = await axios.delete(`${url}/api/posts/delete/${postId}`);
    if(response.data.success){
        toast.success(response.data.message);
        fetchAllPosts();
        dispatch(showPostOptions(false));
    }else{
        toast.error(response.data.message);
    }
  
  }

  //view a post
  const sendView = async (idPost)=>{

    let response = await axios.put(`${url}/api/posts/view-post/${idPost}`);

    if(response.data.success){
    fetchAllPosts();
    }else{
    console.log("ok");
    }
  }

  //Get all notifications
   const fetchAllNotifications = async ()=>{
    
    let response = await axios.get(`${url}/api/notify/get`);

    if(response.data.success){
        dispatch(setNotifications(response.data.data));
    }else{
        console.log("Error fetching notifications");
    }
}

  //Socket functions
  useEffect(()=>{
  socket.on("online_users",(data)=>{
  dispatch(setOnlineFriends(data));
  });
  },[socket]);

  //new follower
  useEffect(()=>{
    socket.on("new_notify",(data)=>{
        Notification.requestPermission(perm=>{
            if(perm === "granted"){
                new Notification("New follower",{
                    body:data.message,
                    tag:"follower"
                });
            }
        });

        dispatch(addNotification(data));
    })
  },[socket]);

  //Receiving a new message
  useEffect(()=>{
  socket.on("new_message",(data)=>{
  dispatch(addMessage(data));
  });
  },[socket]);
  //End of the socket functions


//Function to send message
const sendMessage = async (text)=>{

    let response = await axios.post(`${url}/api/messages/send`,{
        receiver:chatData._id,
        message:text
    });

    if(response.data.success){
       dispatch(addMessage(response.data.message));
    }else{
        toast.error(response.data.message);
    }
}

//function to get chat messages
const getChatMessages = async ()=>{
    
    let response = await axios.get(`${url}/api/messages/get/${chatData._id}`);

    if(response.data.success){
        dispatch(addMessages(response.data.messages));
    }else{
        console.log("Error fetching chat messages");
    }
}

//Call the function whenever a chat changes
useEffect(()=>{
    getChatMessages();
},[chatData])


//Delete a notification
const deleteNotification = async (id)=>{

    let response = await axios.delete(`${url}/api/notify/delete/${id}`);

    if(response.data.success){
        toast.success(response.data.message);
        fetchAllNotifications();
    }else{
        toast.error(response.data.message); 
    }
}


//Repost functionality
const repostText = async (text)=>{

    let response = await axios.post(`${url}/api/posts/repost-text`,{text:text});

    if(response.data.success){
        dispatch(addPost(response.data.data))
    }else{
        toast.error(response.data.message);
    }
}

    //Call the apis
    useEffect(()=>{
    fetchUser();
    fetchAllUsers();
    fetchAllPosts();
    fetchAllNotifications();
    fetchAllCommunities();
    },[]);

    const context_value={
    url,
    addComment,
    sendLike,
    fetchAllUsers,
    fetchUser,
    addFriend,
    getUserPosts,
    socket,
    deletePost,
    deletePostId,
    setDeletePostId,
    sendView,
    getOtherPosts,
    sendMessage,
    deleteNotification,
    repostText,
    fetchAllCommunities,
    getChatMessages
    }

    return(
        <SocialContext.Provider value={context_value}>
            {props.children}
        </SocialContext.Provider>
    )
}

export default SocialContextProvider;
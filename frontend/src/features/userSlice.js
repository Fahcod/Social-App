import { createSlice } from "@reduxjs/toolkit";


const userSlice=createSlice({
    name:"user",
    initialState:{
        username:"",
        _id:"",
        email:"",
        profile:"",
        user_bio:"",
        current_chat:{},
        notifications:[]
    },
    reducers:{

        setUserData:(state,action)=>{
            state._id = action.payload._id
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.profile = action.payload.profile;
            state.user_bio = action.payload.user_bio
        },
        setCurrentChat:(state,action)=>{
            state.current_chat = action.payload
        },
        setNotifications:(state,action)=>{
            state.notifications = action.payload
        },
        addNotification:(state,action)=>{
            state.notifications.push(action.payload)
        }
    }
});

export const { setUserData,setCurrentChat,addNotification,setNotifications } = userSlice.actions;
export default userSlice.reducer


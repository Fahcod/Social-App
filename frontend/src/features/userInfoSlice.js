import { createSlice } from "@reduxjs/toolkit";


const userInfoSlice=createSlice({
    name:"user_info",
    initialState:{
       friends:[],
       followers:[],
       following:[],
       online_friends:[],
    },
    reducers:{
     setUserInfo:(state,action)=>{
        state.followers = action.payload.followers;
        state.following = action.payload.following;
        state.friends = action.payload.friends
     },
     setOnlineFriends:(state,action)=>{
      state.online_friends = action.payload
     }
    }
});

export const {setUserInfo,setOnlineFriends} = userInfoSlice.actions;
export default userInfoSlice.reducer


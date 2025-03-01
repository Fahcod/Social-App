import { createSlice } from "@reduxjs/toolkit";

const postSlice=createSlice({
    name:"posts",
    initialState:{
        all_posts:[]
    },
    reducers:{
    setAllPosts:(state,action)=>{
        state.all_posts = action.payload
    },
    addPost:(state,action)=>{
        state.all_posts.push(action.payload);
    }
    }
});

export const {setAllPosts,addPost} = postSlice.actions;
export default postSlice.reducer
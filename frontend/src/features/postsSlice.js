import { createSlice } from "@reduxjs/toolkit";

const postSlice=createSlice({
    name:"posts",
    initialState:{
        all_posts:[],
        post_comments:[],
        current_post:{}
    },
    reducers:{
    setAllPosts:(state,action)=>{
        state.all_posts = action.payload
    },
    addPost:(state,action)=>{
        state.all_posts.push(action.payload);
    },
    setPostComments:(state,action)=>{
    state.post_comments = action.payload
    },
    setCurrentPost:(state,action)=>{
        state.current_post=action.payload
    },
    addPostomment:(state,action)=>{
        state.post_comments.push(action.payload)
    }
    }
});

export const {setAllPosts,addPostomment,addPost,setPostComments,setCurrentPost} = postSlice.actions;
export default postSlice.reducer
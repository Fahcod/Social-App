import { createSlice } from "@reduxjs/toolkit";


const messageSlice=createSlice({
    name:"messages",
    initialState:{
    all_messages:[]
    },
    reducers:{
    addMessage:(state,action)=>{
        state.all_messages.push(action.payload);
    },
    addMessages:(state,action)=>{
        state.all_messages=action.payload
    }
    }
});

export const {addMessage,addMessages} = messageSlice.actions;
export default messageSlice.reducer

import { createSlice } from "@reduxjs/toolkit";


const messageSlice=createSlice({
    name:"messages",
    initialState:{
    all_messages:[]
    },
    reducers:{
    addMessage:(state,action)=>{
        state.all_messages.push(action.payload);
    }
    }
});

export const {addMessage} = messageSlice.actions;
export default messageSlice.reducer

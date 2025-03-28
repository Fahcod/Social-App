import { createSlice } from "@reduxjs/toolkit";


const communitySlice=createSlice({
    name:"channels",
    initialState:{
        all_channels:[]
    },
    reducers:{
        setAllChannels:(state,action)=>{
            state.all_channels = action.payload
        },
    }
});

export const {setAllChannels} = communitySlice.actions;
export default communitySlice.reducer

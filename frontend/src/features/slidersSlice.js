import { createSlice } from "@reduxjs/toolkit";


const slidersSlice=createSlice({
    name:"sliders",
    initialState:{
       show_contacts:true
    },
    reducers:{
        setShowContacts:(state,action)=>{
            state.show_contacts=action.payload
        }
    }
});

export const {setShowContacts} = slidersSlice.actions;
export default slidersSlice.reducer
import { createSlice } from "@reduxjs/toolkit";


const usersSlice=createSlice({
    name:"users",
    initialState:{
        all_users:[],
        suggested_users:[]
    },
    reducers:{
        setAllUsers:(state,action)=>{
            state.all_users = action.payload
        },
        setSuggestedUsers:(state,action)=>{
            state.suggested_users=action.payload;
        }
    }
});

export const {setAllUsers,setSuggestedUsers} = usersSlice.actions;
export default usersSlice.reducer


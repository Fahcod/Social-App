import {configureStore} from "@reduxjs/toolkit";
import userSliceReducer from "../features/userSlice";
import usersSliceReducer from "../features/usersSlice";
import modelSliceReducer from "../features/modelSlice";
import postSliceReducer from "../features/postsSlice";
import userInfoSliceReducer from "../features/userInfoSlice";
import messageSliceReducer from "../features/messageSlice";
import communitySliceReducer from "../features/channelSlice"


export const store = configureStore({
    reducer:{
    user:userSliceReducer,
    users:usersSliceReducer,
    models:modelSliceReducer,
    posts:postSliceReducer,
    user_info:userInfoSliceReducer,
    messages:messageSliceReducer,
    channels:communitySliceReducer
    }
});
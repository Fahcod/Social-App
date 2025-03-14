import { createSlice } from "@reduxjs/toolkit";


const modelSlice=createSlice({
    name:"models",
    initialState:{
        show_image_upload:false,
        show_text_upload:false,
        show_post_options:false,
        show_notify:false,
        show_comments:false,
        show_video_upload:false
    },
    reducers:{
      showImageUpload:(state,action)=>{
      state.show_image_upload=action.payload
      },
      showTextUpload:(state,action)=>{
        state.show_text_upload=action.payload
        },
        showPostOptions:(state,action)=>{
            state.show_post_options = action.payload
        },
        showNotify:(state,action)=>{
            state.show_notify=action.payload
        },
        showComments:(state,action)=>{
            state.show_comments=action.payload
        },
        showVideoUpload:(state,action)=>{
            state.show_video_upload=action.payload
        }
    
    }
});

export const {showVideoUpload,showImageUpload,showComments,showTextUpload,showPostOptions,showNotify} = modelSlice.actions;
export default modelSlice.reducer
import { createSlice } from "@reduxjs/toolkit";


const modelSlice=createSlice({
    name:"models",
    initialState:{
        show_image_upload:false,
        show_text_upload:false,
        show_post_options:false,
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
    
    }
});

export const {showImageUpload,showTextUpload,showPostOptions} = modelSlice.actions;
export default modelSlice.reducer
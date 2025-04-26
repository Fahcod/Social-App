import express from "express";
import { upload } from "../utils/multer.js";
import { tokenParser } from "../middleware/auth.js";
import { createImagePost, createIOthermagePost, createOtherVideoPost, createTextPost, createVideoPost, deletePost, getAllPosts, likePost, repostImage, repostText, UpdateViews } from "../controllers/post.controller.js";
import multer from "multer";


const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        cb(null,`${file.fieldname}_${Date.now()}_${file.originalname}`);
    }
});

const uploader = multer({storage:storage});


const postRouter = express.Router();

postRouter.post('/create-image',upload.single("image"),tokenParser,createImagePost);
// the offline image route posting
postRouter.post('/create-img',uploader.single("image"),tokenParser,createIOthermagePost);

postRouter.get('/get-all',getAllPosts);
postRouter.post('/create-text',tokenParser,createTextPost);
postRouter.put('/like-post/:postId',tokenParser,likePost);
postRouter.delete('/delete/:postId',tokenParser,deletePost);
postRouter.put('/view-post/:postId',tokenParser,UpdateViews);

//The repost functionality
postRouter.post("/repost-image",tokenParser,repostImage);
postRouter.post("/repost-text",tokenParser,repostText);

//The video post functionality
postRouter.post('/create-video',upload.single("video"),tokenParser,createVideoPost);
postRouter.post('/create-vid',uploader.single("video"),tokenParser,createOtherVideoPost)

export default postRouter;
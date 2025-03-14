import express from "express";
import { upload } from "../utils/multer.js";
import { tokenParser } from "../middleware/auth.js";
import { createImagePost, createTextPost, createVideoPost, deletePost, getAllPosts, likePost, repostImage, repostText, UpdateViews } from "../controllers/post.controller.js";


const postRouter = express.Router();

postRouter.post('/create-image',upload.single("image"),tokenParser,createImagePost);
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

export default postRouter;
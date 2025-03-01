import express from "express";
import { upload } from "../utils/multer.js";
import { tokenParser } from "../middleware/auth.js";
import { createImagePost, createTextPost, deletePost, getAllPosts, likePost, UpdateViews } from "../controllers/post.controller.js";


const postRouter = express.Router();

postRouter.post('/create-image',upload.single("image"),tokenParser,createImagePost);
postRouter.get('/get-all',getAllPosts);
postRouter.post('/create-text',tokenParser,createTextPost);
postRouter.put('/like-post/:postId',tokenParser,likePost);
postRouter.delete('/delete/:postId',tokenParser,deletePost);
postRouter.put('/view-post/:postId',tokenParser,UpdateViews);

export default postRouter;
import express from "express";
import { tokenParser } from "../middleware/auth.js"; 
import { addComment } from "../controllers/comment.controller.js";


const commentRouter = express.Router();

commentRouter.post('/comment/:postId',tokenParser,addComment)


export default commentRouter;
import express from "express";
import { tokenParser } from "../middleware/auth.js"; 
import { getMessages, sendMessage } from "../controllers/message.controller.js";


const messageRouter = express.Router();

messageRouter.post('/send',tokenParser,sendMessage);
messageRouter.get('/get/:otherId',tokenParser,getMessages);


export default messageRouter;
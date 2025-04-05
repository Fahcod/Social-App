import express from "express";
import { tokenParser } from "../middleware/auth.js"; 
import { getChatMessages,sendMessage } from "../controllers/message.controller.js";


const messageRouter = express.Router();

messageRouter.post('/send',tokenParser,sendMessage);
messageRouter.get('/get/:otherId',tokenParser,getChatMessages);


export default messageRouter;
import express from "express";
import { tokenParser } from "../middleware/auth.js";
import { createCommunity, getChannels } from "../controllers/community.controller.js";
import multer from "multer";

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        cb(null,`${file.fieldname}_${Date.now()}_${file.originalname}`);
    }
});

const uploader = multer({storage:storage});

const communityRouter = express.Router();

communityRouter.post('/create',uploader.single("image"),tokenParser,createCommunity);
communityRouter.get('/get',getChannels)

export default communityRouter;
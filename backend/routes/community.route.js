import express from "express";
import { tokenParser } from "../middleware/auth.js";
import { createCommunity, followCommunity, getChannels, joinCommunity } from "../controllers/community.controller.js";
import {upload} from "../utils/multer"

const communityRouter = express.Router();

communityRouter.post('/create',upload.single("image"),tokenParser,createCommunity);
communityRouter.get('/get',getChannels);
communityRouter.put('/join/:communityId',tokenParser,joinCommunity);
communityRouter.put('/follow/:communityId',tokenParser,followCommunity)

export default communityRouter;
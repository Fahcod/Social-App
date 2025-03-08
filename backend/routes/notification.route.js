import express from "express";
import {tokenParser} from "../middleware/auth.js"
import { deleteNotification, getNotifications } from "../controllers/notification.controller.js";

const notificationRouter = express.Router();

notificationRouter.get("/get",tokenParser,getNotifications);
notificationRouter.delete("/delete/:Id",tokenParser,deleteNotification);

export default notificationRouter;
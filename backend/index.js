import cors from "cors";
import express from "express"
import "dotenv/config";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
import { app,server } from "./utils/socket.js";
import notificationRouter from "./routes/notification.route.js";
import messageRouter from "./routes/message.route.js";
import { CLIENT_URL } from "./utils/url.js";


const port = process.env.PORT;
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    methods:["POST","GET","PUT","DELETE"],
    origin:CLIENT_URL,
    credentials:true
}));

//Connect the DB
connectDB();

//Basic api
app.get('/',(req,res)=>{
    res.send("The server is running");
});

//Include the APIs
app.use('/api/user',userRouter);
app.use("/api/posts",postRouter);
app.use('/api/comments',commentRouter);
app.use('/api/notify',notificationRouter)
app.use("/api/messages",messageRouter)

server.listen(port,()=>{
    console.log(`The server is running on port ${port}`);
});
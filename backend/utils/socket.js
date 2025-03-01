import http from "http";
import express from "express";
import {Server} from "socket.io";

const app = express();

const server = http.createServer(app);
const io = new Server(server,{
    cors:{
        origin:"http://localhost:5173",
        credentials:true,
        methods:["GET","POST","PUT","DELETE"]
    }
});

//Store for online users
const onlineUsers = {};

//Get the user's socket id
function getUserSocket(userId){
  return onlineUsers[userId]
  }

io.on("connection",(socket)=>{
 
  console.log("A user connected",socket.id);

    //get the connection id
  const CONN_ID_NUM = socket.handshake.query.room_id;

    if(CONN_ID_NUM){

    onlineUsers[CONN_ID_NUM]=socket.id;

    //emmit the online users
    io.emit("online_users",Object.keys(onlineUsers));

    console.log(Object.keys(onlineUsers));

    }

    //Handle socket disconnection
    socket.on("disconnect",()=>{

    delete onlineUsers[CONN_ID_NUM];

    //emmit the online users
    io.emit("online_users",Object.keys(onlineUsers));

    console.log(Object.keys(onlineUsers));

    });
  
});

export {io,app,server,getUserSocket}
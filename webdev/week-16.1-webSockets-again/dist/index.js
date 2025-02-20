"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
//event handler
wss.on("connection", function (socket) {
    // console.log("User connected")
    // setInterval(() => {
    //     socket.send("Current SOL price is: "+ Math.random())
    // }, 2000)
    // socket.send("hello");
    socket.on("message", (e) => {
        if (e.toString() === "ping") {
            socket.send("pong");
        }
        else {
            socket.send("send ping if you want pong");
        }
    });
});

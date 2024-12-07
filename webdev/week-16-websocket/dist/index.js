"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
//event handler
wss.on("connection", function (socket) {
    // console.log("user connected")
    // setInterval(() => {
    //     socket.send("current price:" + Math.random())
    // }, 5000)
    // // socket.send("hiiiiiiiii");
    socket.on("message", (e) => {
        // console.log(e.toString());
        if (e.toString() === "ping") {
            socket.send("pong");
        }
    });
});

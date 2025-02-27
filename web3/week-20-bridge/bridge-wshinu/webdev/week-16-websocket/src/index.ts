import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });


//event handler
wss.on("connection", function(socket){
    // console.log("user connected")
    // setInterval(() => {
    //     socket.send("current price:" + Math.random())
    // }, 5000)
    // // socket.send("hiiiiiiiii");



    socket.on("message", (e) => {
        // console.log(e.toString());
        if(e.toString() === "ping"){
            socket.send("pong")
        }
    })


    setInterval(() => {
        socket.send("Hello");
    }, 500);
})
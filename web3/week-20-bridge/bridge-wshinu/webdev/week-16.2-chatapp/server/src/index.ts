import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

interface User {
    socket: WebSocket;
    room: string;
}
let allSockets: User[] = [];

wss.on("connection", (socket) => {


    socket.on("message", (msg) => {
        const parsedMessage = JSON.parse(msg as unknown as string);
        if (parsedMessage.type === "join") {
            allSockets.push({
                socket,
                room: parsedMessage.payload.roomId
            })
        }
        if (parsedMessage.type === "chat") {
            //@ts-ignore
            // const currentUserRoom = allSockets.find((x) => x.socket == socket).room

            let currentUserRoom = null;
            for (let i = 0; i < allSockets.length; i++) {
                if(allSockets[i].socket == socket){
                    currentUserRoom = allSockets[i].room
                }
            }

            for (let i = 0; i < allSockets.length; i++) {
                if (allSockets[i].room == currentUserRoom) {
                    allSockets[i].socket.send(parsedMessage.payload.message)
                }
            }
        }
    })
    socket.on("disconnect", () => {
        // allSockets = allSockets.filter(x => x != socket);
    })
})




































//PART -1

// import { WebSocketServer, WebSocket } from "ws";

// const wss = new WebSocketServer({ port: 8080 });

// // let userCount = 0;
// let allSockets: WebSocket[] = [];

// wss.on("connection", (socket) => {
//     allSockets.push(socket)
//     // userCount = userCount + 1;
//     // console.log("user conected #" + userCount);

//     socket.on("message", (msg) => {
//         // console.log("message received " + msg.toString());
//         allSockets.forEach((e) => {
//             e.send(msg.toString() + ": sent from the server")
//         })
//     })
//     socket.on("disconnect", () => {
//         allSockets = allSockets.filter(x => x != socket);
//     })
// })
import WebSocket, { WebSocketServer } from "ws";


const wss = new WebSocketServer({port: 8080})

interface User {
    socket:WebSocket;
    room:string;
}

let allScokets: User[] = [];

wss.on("connection", (socket) => {

    socket.on("message", (event) => {
        const parsedMessage = JSON.parse(event as unknown as string);
        if(parsedMessage.type === "join"){
            allScokets.push({
                socket,
                room:parsedMessage.payload.roomId
            })
        }
        if(parsedMessage.type === "chat"){
            //is bande ka room kon sa hai
            let currentUserRoom = null;
            for(let i = 0; i < allScokets.length; i++){
                if(allScokets[i].socket == socket){
                    currentUserRoom = allScokets[i].room
                }
            }

            //to send message to all of them who is in this room
            for(let i = 0; i < allScokets.length; i++){
              if(allScokets[i].room == currentUserRoom){
                allScokets[i].socket.send(parsedMessage.payload.message)
              }  
            }
        }
    })

    socket.on("disconnect", () => {
        // allScokets = allScokets.filter(x => x != socket)
    })
    
    
})
















//phase one
// const wss = new WebSocketServer({port: 8080})

// let userCount = 0;
// let allScokets:WebSocket[] = [];

// wss.on("connection", (socket) => {
//     allScokets.push(socket)
//     userCount++;
//     console.log("user connected number #", userCount);

//     socket.on("message", (event) => {
//         console.log("messaage received #" + event.toString() )
//         allScokets.forEach((el) => {
//             el.send(event.toString() + ": sent from the server")
//         })
//     })

//     socket.on("disconnect", () => {
//         allScokets = allScokets.filter(x => x != socket)
//     })
    
    
// })
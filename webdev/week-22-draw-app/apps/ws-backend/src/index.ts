import WebSocket, { WebSocketServer } from "ws";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
import { prismaClient } from "@repo/db/client";

const wss = new WebSocketServer({ port: 8080 });

interface User {
  ws: WebSocket;
  rooms: string[];
  userId: string;
}

const users: User[] = [];

function checkUser(token: string): string | null {
  try {
    const decode = jwt.verify(token, JWT_SECRET);

    if (typeof decode === "string") {
      return null;
    }
    if (!decode || !decode.userId) {
      return null;
    }

    return decode.userId;
  } catch (error) {
    console.log("backend crashed");
    return null;
  }
}

wss.on("connection", function connection(ws, request) {
  const url = request.url;
  if (!url) {
    return;
  }
  const queryParams = new URLSearchParams(url.split("?")[1]);
  const token = queryParams.get("token") ?? "";
  const userId = checkUser(token);

  if (userId == null) {
    ws.close();
    return null;
  }

  users.push({
    userId,
    rooms: [],
    ws,
  });

  ws.on("message", async function message(data) {
    const parseData = JSON.parse(data as unknown as string); // {type: "join_room", roomId: 1} data comes in this format

    if (parseData.type == "join_room") {
      const user = users.find((x) => x.ws === ws);
      user?.rooms.push(parseData.roomId);
    }

    if (parseData.type === "leave_room") {
      const user = users.find((x) => x.ws === ws);
      if (!user) {
        return;
      }
      user.rooms = user?.rooms.filter((x) => x === parseData.room);
    }

    if (parseData.type === "chat") {
      const roomId = parseData.roomId;
      const message = parseData.message;

      await prismaClient.chat.create({
        data: {
          roomId,
          message,
          userId,
        },
      });

      users.forEach((user) => {
        if (user.rooms.includes(roomId)) {
          user.ws.send(
            JSON.stringify({
              type: "chat",
              message: String(message), 
              roomId,
            })
          );
        }
      });
      
    }
  });
});

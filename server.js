import { WebSocketServer } from "ws";

const socket = new WebSocketServer({ port: 8080 });

socket.on("connection", (client) => {
  client.on("message", (message, isBinary) => {
    [...socket.clients]
      .filter((c) => c !== client)
      .forEach((c) => c.send(isBinary ? message.toString() : message));
  });
});

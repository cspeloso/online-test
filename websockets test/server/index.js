const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8082 });

wss.on("connection", ws => {

    console.log("New connection made!");

    ws.on("message", data => {
        console.log(`Client has sent us: ${data}`);

        wss.clients.forEach(function e(client){
            client.send(message);
        });

        ws.send(data.toString().toUpperCase());
    });

    ws.on("close", () => {
        console.log("Client has disconnected!");
    });
});


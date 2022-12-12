<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Websockets Test</title>
    <link rel='stylesheet' href='style.css' />
</head>
<body>
    <h1>Welcome to the websockets test</h1>
    <p>This is a websockets test my negro.</p>

    <h3>Chat Area</h3>
    <div class='chats'>
        
    </div>

    <input id='user_message' placeholder="Enter chat" />
    <button class='send-chat' onclick='sendChat()'>Send Chat</button>

    <script>

        const ws = new WebSocket("ws://localhost:8082");
        var wsOpen = false;

        //  when your connection is made to the server
        ws.addEventListener("open", () => {
            console.log("We're connected!");
            wsOpen = true;

            ws.send("Hey, how's it going?");
        });

        ws.addEventListener("close", () => {
            wsOpen = false;
        });

        //  when you receive a message from the server
        ws.addEventListener("message", e => {
            $('.chats').append(`<p class='chat'>${e.data}</p>`);
        });


        function sendChat() {
            var userMessage = $('#user_message').text();

            //  if the websocket is open, send a chat
            if(wsOpen)
            {
                ws.send(userMessage);
            }
            
        }

    </script>

    <script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>

</body>
</html>
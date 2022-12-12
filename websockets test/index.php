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

    <script>

        const ws = new WebSocket("ws://localhost:8082");

        //  when your connection is made to the server
        ws.addEventListener("open", () => {
            console.log("We're connected!");

            ws.send("Hey, how's it going?");
        });

        //  when you receive a message from the server
        ws.addEventListener("message", e => {
            $('.chats').append(`<p class='chat'>${e.data}</p>`);
        });

    </script>

    <script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>

</body>
</html>
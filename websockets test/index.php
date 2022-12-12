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

    <script>
        const ws = new WebSocket("ws://localhost:8082");

        ws.addEventListener("open", () => {
            console.log("We're connected!");
        });
    </script>


</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Great Games</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="shortcut icon" href="imgs/favicon.png" type="image/x-icon">
</head>
<body>
    <div id="root"></div>
    @vite(['resources/js/app.js'])
</body>
</html>
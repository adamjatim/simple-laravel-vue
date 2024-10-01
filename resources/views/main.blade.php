<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Laravel vue SPA</title>
    <style>
        body {
            font-family: sans-serif;
            margin: 15%;
        }
    </style>
    @vite('resources/js/app.js')
</head>
<body>
    <div id="app">
        <h1 v-text="'Hello, ' +title"></h1>
        <header-component></header-component>
        <!-- router-view akan menampilkan komponen yang sesuai dengan route -->
        <router-view></router-view>
        <example-component></example-component>
        <footer-component></footer-component>
    </div>


</body>
</html>

// Маршрутизация

var fs = require('fs');
var http = require('http');


// функция создания сервера
var server = http.createServer(function (req, res) {

    console.log("url: " + req.url); // выводим url страницы на которой находимся
    if (req.url === "/index" || req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" }); // читаем заголовок от сервера, при 200-ом будет выводится html code. 
        fs.createReadStream(__dirname + "/index.html").pipe(res);
    }
    else if ( req.url === "/about" ) 
    {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" }); // читаем заголовок от сервера, при 200-ом будет выводится html code. 
        fs.createReadStream(__dirname + "/about.html").pipe(res);
    }
    else{
        res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" }); // читаем заголовок от сервера, при 200-ом будет выводится html code. 
        fs.createReadStream(__dirname + "/404.html").pipe(res);
    }

});

server.listen(3000, "127.0.0.1"); // указыавем порт и ip адрес
console.log("port 3000"); // выводим порт
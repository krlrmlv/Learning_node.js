// Создание локального сервера

var http = require('http');


// функция создания сервера
var server = http.createServer(function(req, res){
    
    console.log("url: " + req.url); // выводим url страницы на которой находимся
    res.writeHead(200, {"Content-Type" : "text/plain; charset=utf-8"}); // читаем заголовок от сервера, при 200-ом будет выводится текст в кодировке utf-8. 
    res.end("Привет мир"); //  выводимый текст
});  

server.listen(3000, "127.0.0.1"); // указыавем порт и ip адрес
console.log("port 3000"); // выводим порт
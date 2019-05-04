// Функция pipe(), работа с HTML и JSON

var fs = require('fs');
var http = require('http');


// функция создания сервера
// var server = http.createServer(function (req, res) {

//     console.log("url: " + req.url); // выводим url страницы на которой находимся
//     res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" }); // читаем заголовок от сервера, при 200-ом будет выводится текст в кодировке utf-8. 
//     var myflow = fs.createReadStream(__dirname + "/article.txt", "utf8"); // создание переменной в которую будут записываться  считаннные данные потоками
//     myflow.pipe(res);// вывод в html полученного текста потоками
// });


// var server = http.createServer(function (req, res) {

//     console.log("url: " + req.url); // выводим url страницы на которой находимся
//     res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" }); // читаем заголовок от сервера, при 200-ом будет выводится html код в кодировке utf-8. 
//     var myflow = fs.createReadStream(__dirname + "/index.html", "utf8"); // создание переменной в которую будут записываться  считаннные данные потоками
//     myflow.pipe(res);// вывод в html полученного текста потоками
// });

// var server = http.createServer(function (req, res) {

//     console.log("url: " + req.url); // выводим url страницы на которой находимся
//     res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" }); // читаем заголовок от сервера, при 200-ом будет выводится json формат
//     var object = {
//         model : "audi",
//         speed : "231.3 km/h",
//         wheels : 4
//     };

//     res.end( JSON.stringify(object))
  
// });



server.listen(3000, "127.0.0.1"); // указыавем порт и ip адрес
console.log("port 3000"); // выводим порт
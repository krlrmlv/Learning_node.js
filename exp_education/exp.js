// Маршрутизация

// var express = require('express'); // экспортируем библиотеку
// var app = express();  // вызываем функцию бибилиотеки


// // обработчик простых url адресов
// app.get("/", function(req, res){
//     res.send("Hello world");
// });

// // обработчик динамических url адресов
// app.get("/blog/:name/:id", function(req, res){
//     res.send("id is - " + req.params.name + req.params.id);
// });

// app.listen(3000);  // порт для локального сервера


// Шаблонизатор

// var express = require('express'); // экспортируем библиотеку
// var app = express();  // вызываем функцию бибилиотеки


// app.set("view engine", "ejs");  // подключение шаблонизатора

// app.get("/", function(req, res){
//     res.sendFile(__dirname + "/index.html");
// });

// app.get("/about", function(req, res){
//     res.sendFile(__dirname + "/about.html");
// });

// // обработчик динамических url адресов c передачей параметров
// app.get("/news/:id", function(req, res){
//     var obj = {
//         title : "Новость",
//         id : 4,
//         paragraphs: ['параграф','текст','числа','пук-пук']
//     }
//     res.render("news", { newsID: req.params.id, obj: obj });  // вызов шаблона
// });

// app.listen(3000);  // порт для локального сервера


//Подключение файлов

// var express = require('express'); // экспортируем библиотеку
// var app = express();  // вызываем функцию бибилиотеки


// app.set("view engine", "ejs");
// app.use('/static', express.static('static')); // подключение статичных файлов, вроде css js и img


// app.get("/", function(req, res){
//     res.render("index");
// });

// app.get("/about", function(req, res){
//     res.render("about");
// });

// app.get("/news/:id", function(req, res){
//     var obj = {
//         title : "Новость",
//         id : 4,
//         paragraphs: ['параграф','текст','числа','пук-пук']
//     }
//     res.render("news", { newsID: req.params.id, obj: obj });
// });

// app.listen(3000);  // порт для локального сервера


//  Отправка формы

// var express = require('express'); // экспортируем библиотеку
// var bodyParser = require('body-parser'); // экспортируем библиотеку

// var urlencodedParser = bodyParser.urlencoded({ extended: false }); // создаём переменную для передачи данных
// var app = express();  


// app.set("view engine", "ejs");
// app.use('/static', express.static('static')); // подключение статичных файлов, вроде css js и img




// app.get("/", function(req, res){
//     res.render("index");
// });


// app.get("/about", function(req, res){
//     res.render("about");
// });

// app.get("/news/:id", function(req, res){
//     var obj = { title : "Новость", id : 4, paragraphs: ['параграф','текст','числа','пук-пук'] }
//     res.render("news", { newsID: req.params.id, obj: obj });
// });


// // пост запрос для обработки данных  с формы
// app.post("/", urlencodedParser , function(req, res){
//     if (!req.body) return res.sendStatus(400);
//     console.log(req.body); // даннные из формы
//     res.render("index-success", { data: req.body });
// });

// app.listen(3000);  // порт для локального сервера


// Данные из URl

var express = require('express'); // экспортируем библиотеку
var bodyParser = require('body-parser'); // экспортируем библиотеку

var urlencodedParser = bodyParser.urlencoded({ extended: false }); // создаём переменную для передачи данных
var app = express();  


app.set("view engine", "ejs");
app.use('/static', express.static('static')); // подключение статичных файлов, вроде css js и img




app.get("/", function(req, res){
    res.render("index");
});


app.get("/about", function(req, res){
    res.render("about");
});

app.get("/news/:id", function(req, res){
    var obj = { title : "Новость", id : 4, paragraphs: ['параграф','текст','числа','пук-пук'] };
    console.log(req.query);
    res.render("news", { newsID: req.params.id, obj: obj });
});


// пост запрос для обработки данных  с формы
app.post("/", urlencodedParser , function(req, res){
    if (!req.body) return res.sendStatus(400);
    console.log(req.body); // даннные из формы
    res.render("index-success", { data: req.body });
});

app.listen(3000);  // порт для локального сервера
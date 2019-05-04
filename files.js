// Чтение файлов

var fs = require('fs'); // подключение встроенных модулей
 var file__reader =  fs.readFileSync("text.txt", "utf8"); // синхронное чтение файла (название файла, кодировка)
 console.log(file__reader); //вывод в консоль

 var message = "pizdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa \n" + file__reader; // текст + значение переменной
 fs.writeFileSync('new_text.txt', message); // синхронная запись в файл


fs.readFile("text.txt", "utf8", function(err, data){ console.log(data); }); // aсинхронное чтение файла (название файла, кодировкаб callback функция)
fs.writeFile('new_async_text.txt', "wwwwwww", function(err, data){});// aсинхронное чтение файла (название файла, кодировкаб callback функция)

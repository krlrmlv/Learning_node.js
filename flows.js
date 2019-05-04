//  Работа с потоками

var fs = require('fs');

var myflow = fs.createReadStream(__dirname + "/article.txt", "utf8"); // создание переменной в которую будут записываться  считаннные данные потоками

// при поступлении новых данных  в переменную myflow будет выводиться соответствуюй кусок данных, после этого процедура повторяется
myflow.on('data', function(chunk){
console.log("Новые данные получены:\n" + chunk ); // вывод данных в консоль
});


var mewriteglow = fs.createWriteStream(__dirname + "/flowwrite.txt"); // создание переменной для записи в файл

// при поступлении новых данных  в переменную myflow будет эти даннные будут потоково записываться в переменную mewriteglow
myflow.on('data', function(chunk){
    console.log("Новые данные \n"); // вывод данных в консоль
    mewriteglow.write(chunk); // запись потока в файл
});
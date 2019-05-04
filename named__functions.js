console.log("Hellow world!");
console.log("Путь к файлу " + __dirname); // Путь к файлу
console.log("Имя файла " + __filename); // Имя файла


// Именованные функции 

var print = function() {console.log("именованная функция");}; // именованная функция
print(); // выхов именованной функции

function call(func) {func();} // вызов функции через другую функцию объявление
call(print); // непосредственно сам вызов
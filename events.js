
// События

var events = require('events'); // подключение встроенных модулей
var myem = new events.EventEmitter(); // вызываем обработчик событий
myem.on('some_event',  function(text) {console.log(text);}); // функция при срабатывании собития
myem.emit('some_event', 'обработчик событий сработал!'); // вызов события


var util = require('util'); // подключение встроенных модулей
var Cars = function(model){ this.model = model;}; // конструктор объекта с параметром
util.inherits(Cars, events.EventEmitter); // наследование любым созданным позже объектом на основе вышеуказанного конструктора событий от родителя

var bmw = new Cars('BMW'); // создаие переменных на основе класса, переменные наследуют все события от родителя
var audi = new Cars('Audi');
var volvo = new Cars('Volvo');

var cars = [bmw, audi, volvo]; // создаём массив с вышеуказанными переменными
cars.forEach(function(car){
    car.on('speed', function(text)
    {
        console.log(car.model + " speed - is: " + text);
    });
}); // функция на обработку события speed, в которой при срабатывании выводится модель машины и её скорость вь виде указанного параметра

bmw.emit('speed', "256.4 km"); // вызов события с параметром для speed
audi.emit('speed', "126.2 km"); 
volvo.emit('speed', "216 km"); 
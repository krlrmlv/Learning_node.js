var array = function(array) {
    return "В массиве " + array.length + " элементов";
};

var multiply = function(x,y){
    return `${x} умноженное на ${y} равно ${x * y}` // шаблон строки с синтаксисом эксма 6
}

var val = 666;

module.exports = array; // экспортирование функции ( только одна функция из всего файла )

module.exports.array = array; // экспортирование одной конкретной функции функции ( несколько функций)
module.exports.multiply = multiply; // экспортирование одной конкретной функции функции
module.exports.val = val; // экспортирование одной конкретной функции функции

module.exports.array = function(array) { return "В массиве " + array.length + " элементов"; }; // упрощённая запись экспорта
module.exports.multiply = function(x,y){ return `${x} умноженное на ${y} равно ${x * y}` } // упрощённая запись экспорта
module.exports.val = 666; // упрощённая запись экспорта

module.exports = { // ещё одна упрощённая запись экспорта 
    array : array,
    multiply : multiply,
    val : val
    
}
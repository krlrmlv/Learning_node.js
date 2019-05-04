// Работа с директориями

var fs = require('fs'); 
fs.unlink('file.txt', function(){}) // асинхронное удаление файла
fs.mkdirSync("dir");// сихронное создание директории
fs.rmdirSync("dir");// сихронное удаление диреcктории

fs.mkdir("dir", function(){
    fs.writeFile("./dir/newtext.txt", "teeeeeeeeeeeeeeeeeeeeext" , function(){
        console.log("всё готово");
    });
});// асихронное создание директории  с последующим созданием текстового файла внутри директории


fs.unlink('./dir/newtext.txt', function(){
fs.rmdir('dir', function(){});
}) // асинхронное удаление текстового файла, а затем и само папки
//  перед удалением папки нужно обязательно удалить айлы из  неё, иначе выведется ошибка 
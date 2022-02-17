/*
Написать три функции:
1) replaceInArray. Функция принимает три аргумента: 
   - array
   - любое значение
   - любое значение

2) _replaceOriginal. Она принимает два аргумента: 
   - array
   - любое значение

   Функция должна заменять все элементы переданного массива на второй переданный аргумент и возвращать измененный.

3) _replaceCopy. Она принимает два аргумента: 
   - array
   - любое значение

   Функция должна заменять все элементы переданного массива на второй переданный аргумент, НЕ ИЗМЕНЯЯ оригинальный массив, и вернуть новый.



Функция должна вернуть новый массив на основе переданного array, в котором все значения будут заменены на второй переданный аргумент. Третий параметр у функции отвечает за то, должен ли быть изменён оригинальный массив или нет.

Добавить проверки, чтобы не вылетали ошибки.
*/


function replaceInArray(aArray, value, modifyOriginal) {
  if(Array.isArray(aArray)){
    return modifyOriginal ? _replaceCopy(aArray,value) : _replaceOriginal(aArray,value)
  } else {
    return "Invalid passed arguments"
  }
};

function _replaceCopy(aArray, value) {
  aArray.forEach((el, index) => aArray[index] = value)
  return aArray;
};

function _replaceOriginal(aArray, value) {
  return aArray.map(x => x = value)
};

replaceInArray([], 1, true) // []
replaceInArray([1,2,3], {}, false) // [{}, {}, {}]
replaceInArray([{}, [], false], ":)") // [":)",":)",":)"]
replaceInArray({}, 2) // "Invalid passed arguments"
let aOldArray = [1,2,3];
String(replaceInArray(aOldArray, null, false)) !==  String(aOldArray) // true


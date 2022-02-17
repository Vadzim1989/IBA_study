/*Max and Min from array

Написать функцию, которая в качестве аргумента будет принимать массив.
Функция должна возвращать объект, содержащий два свойства: [Самое маленькое число в переданном массиве] и [Самое большое число в переданном массиве], либо пустой объект. Значениями этих свойств должны быть индексы этих чисел в массиве.
Передаваться всегда будет либо массив со значениями любого типа, либо пустой массив.*/
function getMinMax(aArray) {
    const min = Math.min(...aArray)
        , max = Math.max(...aArray);
    const minIndex = aArray.indexOf(min)
        , maxIndex = aArray.indexOf(max);
    const minMax = {};
    minMax[min] = minIndex;
    minMax[max] = maxIndex;
    
    return (isNaN(min) || isNaN(max)) || (!isFinite(min) || !isFinite(max)) ? {} : minMax
}



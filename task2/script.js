/*Написать функцию, которая принимает два числа и возвращает результат их умножения.*/

function getMultiplication(num1,num2) {
    if(!isNaN(num1) && !isNaN(num2) && 
        isFinite(num1) && isFinite(num2) && 
        num1 !== null && num2 !== null) {
            return num1 * num2
        }
    return
}

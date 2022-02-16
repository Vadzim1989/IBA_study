/*Написать функцию, которая в качестве аргумента будет принимать любое не отрицательное, целое число.
Функция должна возвращать число, цифры которого отсортированы в порядке убывания.*/

function descendingDigits(iNumber) {
  const transformToNum = num => +num;
  const numberArr = Array.from(String(iNumber), transformToNum);
  numberArr.sort((a,b) => b-a)
  return +numberArr.join('')
}

/*Написать функцию, которая принимает строку и удаляет из нее первый и последний символ.
Всегда будет передавать только строка и ее длинна будет больше или равна 2.
*/

function removeFirstAndLastChar(sString) {
  return sString.slice(1,-1);
}

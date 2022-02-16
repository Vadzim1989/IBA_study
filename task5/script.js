/*Написать функцию, которая для заданной буквы английского алфавита выводит справа стоящую букву на стандартной клавиатуре. При этом клавиатура замкнута, т.е. справа от буквы «p» стоит буква «a», от буквы «l» стоит буква «z», а от буквы «m» — буква «q».

Раскладка клавиатуры только английская, на вход получаете один аргумент, проверка входных параметров обязательна. 
*/

function getNextChar(char) {
  const chars = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'.split('');
  if(!isNaN(char) || char === null || char.trim() === '' || isFinite(char) || char.length !== 1) {
    return 'Wrong char'
  } else {
      for(let i = 0; i < chars.length; i++) {
        if(chars[i] === char) console.log(chars[i+1])
      }
  }
}
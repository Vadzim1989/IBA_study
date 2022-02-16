/*
Multiples of 3 or 5
Эта задачка из интернетов, поэтому не гуглить!

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.
*/

function isMultiplesOfThreeOrFive(startNumber, endNumber) {
  const arr = [];
  for(i = startNumber; i <= endNumber; i++){
    arr.push(i)
  }
  return arr.map(x => { if(x < 0) return 0; else return x}).filter(x => x%3 === 0 || x%5 === 0).reduce((sum, item) => sum + item);
}

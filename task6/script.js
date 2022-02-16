/*Write a loop that makes seven calls to console.log to output the following triangle:
*/

function writeTriangle(char, callNumber) {
  for(let i = 1; i <= callNumber; i++) {
    console.log(char.repeat(i))
  }
}

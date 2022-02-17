/*
Write a function, that returns passed number in hex representation.
Add validation for passed argument
*/

function hexValue(val) {
   return (isNaN(val) || val === null || !isFinite(val)) ?
  'wrong value' : (val).toString(16)
};


/*
Write a function, that checks passed argument for Infinity
*/

function isInfinity(val) {
  return isFinite(val) ? 'is not infinity value' : 'is infinity'
}

/*
Write a function that returns passed amount of money without "money type"
100USD -> 100
*/ 

function getNumberFromString(string) {
  return string.match(/[0-9]+/g);
}


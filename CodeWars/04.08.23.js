//Summation
var summation = function (num) {
  let sum = 0;

  for (i = 1; i <= num; i++) {
    sum = sum + i
  }
  return sum
}

// Альтернативный вариант решения с без цикла (взято в обсуждений CodeWars)
var summation1 = function (num) {
    return num * (num + 1) / 2
}

//Opposite number
function opposite(number) {
  return number * (-1)
}

//Convert a Number to a String!
function numberToString(num) {
  return String(num);
}

// Convert boolean values to strings 'Yes' or 'No'.
function boolToWord( bool ){
  return bool ? 'Yes' : 'No'
}

//Find the smallest integer in the array
function findSmallestInt(args) {
  let min = args[0];
  for (let i = 1; i < args.length; i++ ) {
      if (args[i] < min) {
        min = args[i]
    }
  }
  return min
}

//Remove First and Last Character
function removeChar(str){
  return str.slice(1, str.length - 1)
}

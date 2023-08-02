// Return Negative
function makeNegative(num) {
    return num > 0 ? num * (-1) : num
  }
  
// Sum of positive
function positiveSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        sum = sum + arr[i];
      }
    }
    return sum
}

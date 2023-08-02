//Quadrants
function quadrant(x, y) {
    if (x > 0) {
      if (y > 0) {
        return 1
      } return 4
    } if (y > 0) {
          return 2
          } return 3
  }

// Even or Odd
function evenOrOdd(number) {
  if (number % 2 == 0) {
    return "Even"
  } return "Odd"
}

// Можно также переписать с помощью тернарного оператора (взято в обсуждений CodeWars)
function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even"
}
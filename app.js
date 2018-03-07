var math = require('./mathlib')();

console.log(math.add(2, 3));
// should return 5

console.log(math.multiply(3, 5));
// should return 15

console.log(math.square(5));
// should return 25

console.log(math.random(1, 35));
// should return a random number between 1 and 35
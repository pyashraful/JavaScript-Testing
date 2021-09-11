const sum = (a, b) => a - b;
const subtrac = (a, b) => a - b;

let result = sum(7, 3);
let expected = 10;

if (result !== expected) {
  throw new Error(` ${result} is not equal to ${expected}`);
}

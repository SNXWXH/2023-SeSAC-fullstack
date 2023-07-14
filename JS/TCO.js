const assert = require("assert");

function fac(n) {
  if (n === 0) return 1;
  return n * fac(n - 1);
}

function facTCO(n, acc = 1) {
  if (n === 0) return acc;
  return facTCO(n - 1, n * acc);
}
const arrFacto = [];
const arrTCO = [];

for (let i = 0; i < 10; i++) console.log(i, fac(i));
console.log("-----------");

for (let i = 0; i < 10; i++) console.log(i, facTCO(i));

console.log("============");

function fibonacciRecursive(n) {
  if (n < 2) return n;
  return fibonacciRecursive(n - 2) + fibonacciRecursive(n - 1);
}

const fiboTCO = (n, pp = 0, p = 1) =>
  n === 0 ? pp : fiboTCO(n - 1, p, pp + p);

for (let i = 0; i < 10; i++) console.log(i, fibonacciRecursive(i));
console.log("-----------");

for (let i = 0; i < 10; i++) console.log(i, fiboTCO(i));

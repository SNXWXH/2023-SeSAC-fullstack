let runCNT = 0;

//재귀
function fibonacciRecursive(n) {
  runCNT++;
  if (n < 2) return n;
  return fibonacciRecursive(n - 2) + fibonacciRecursive(n - 1);
}
console.time("x");
for (let i = 0; i < 40; i += 1) {
  runCNT = 0;
  console.log(`${i}, ${fibonacciRecursive(i)}, ${runCNT}회`);
}
console.timeEnd("x");

//loop
function fibonacciLoop(n) {
  const arr = [0, 1];
  for (let i = 2; i <= n; i += 1) {
    arr[i] = arr[i - 2] + arr[i - 1];
  }
  return arr[n];
}
console.time("p");
for (let i = 0; i < 40; i += 1) {
  runCNT = 0;
  console.log(`${i}, ${fibonacciLoop(i)}, ${runCNT}회`);
}
console.timeEnd("p");

// memoized 함수
function memoized(fn) {
  //클로저: 은닉
  const memoizedTable = {};
  return function (k) {
    return memoizedTable[k] || (memoizedTable[k] = fn(k));
  };
}

const memoizedfibonacci = memoized(function (n) {
  runCNT += 1;
  if (n < 2) return n;
  return memoizedfibonacci(n - 2) + memoizedfibonacci(n - 1);
});

console.time("q");
for (let i = 0; i < 40; i += 1) {
  runCNT = 0;
  console.log(`${i}, ${memoizedfibonacci(i)}, ${runCNT}회`);
}
console.timeEnd("q");

//memoized 함수 => fn함수 memoized1에 넣기
function memoized1() {
  function fn(n) {
    runCNT += 1;
    if (n < 2) return n;
    return memoizedfibonacci1(n - 2) + memoizedfibonacci1(n - 1);
  }

  const memoizedTable1 = {};
  return function (k) {
    return memoizedTable1[k] || (memoizedTable1[k] = fn(k));
  };
}

const memoizedfibonacci1 = memoized1();

console.time("q");
for (let i = 0; i < 40; i += 1) {
  runCNT = 0;
  console.log(`${i}, ${memoizedfibonacci1(i)}, ${runCNT}회`);
}
console.timeEnd("q");

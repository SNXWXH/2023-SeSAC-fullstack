/**
 * *다음과 같은 정수 배열이 주어지고, 양의 정수 N이 주어졌을 때,
 * *배열에서 합해서 N이 되는 두 개의 요소(index)를 찾는
 * *keyPair(arr,n)함수를 작성하시오
 */

const keyPair = (arr, n) => {
  let pair = [];
  arr.map((v) => {
    pair.push(n - v);
  });
  return arr.reduce((acc, v, i) => {
    if (pair.includes(v)) acc.push(i);
    if (i === arr.length - 1) {
      if (acc.length % 2 != 0) acc.splice(acc.indexOf(arr.indexOf(n / 2)), 1);
    }
    // if (pair.includes(v)) if (v * 2 != n) acc.push(i);

    return acc;
  }, []);
};

const a = keyPair([1, 4, 45, 6, 10, 8], 16); //[3,4]
console.log("🚀  a:", a);
const b = keyPair([1, 2, 4, 3, 6], 10); //[2,4]
console.log("🚀  b:", b);
const c = keyPair([1, 2, 3, 4, 5], 9); //[3,4]
console.log("🚀  c:", c);
const d = keyPair([1, 2, 4, 4, 9], 8); //[3,4]
console.log("🚀  d:", d);
const e = keyPair([1, 4, 45, 9, 8, 8], 16); // [4,5]
console.log("🚀  e:", e);

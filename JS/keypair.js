/**
 * *다음과 같은 정수 배열이 주어지고, 양의 정수 N이 주어졌을 때,
 * *배열에서 합해서 N이 되는 두 개의 요소(index)를 찾는
 * *keyPair(arr,n)함수를 작성하시오
 */

const keyPair = (arr, n) => {
  let pair = [];
  console.log("🚀 ~ file: keypair.js:9 ~ keyPair ~ pair:", pair);
  arr.map((v) => {
    pair.push(n - v);
  });
  return arr.reduce((result, v, i) => {
    if (pair.includes(v)) result.push(i);
    if (i === arr.length - 1) {
      if (result.length % 2 != 0) {
        let dup = arr.indexOf(n / 2);
        result.splice(result.indexOf(dup), 1);
      }
    }
    // if (pair.includes(v)) if (v * 2 != n) result.push(i);

    return result;
  }, []);
};

console.log(keyPair([1, 4, 45, 6, 10, 8], 16)); //[3,4]
console.log(keyPair([1, 2, 4, 3, 6], 10)); //[2,4]
console.log(keyPair([1, 2, 3, 4, 5], 9)); //[3,4]
console.log(keyPair([1, 2, 4, 4, 9], 8)); //[3,4]
console.log(keyPair([1, 4, 45, 9, 8, 8], 16)); // [4,5]

/*
 TODO: 다음과 같은 정수 배열이 주어지고, 양의 정수 N이 주어졌을 때, 배열에서 합해서 N이 되는 두 개의 요소(index)를 찾는 keyPair(arr,n)함수를 작성하시오
 * 제일 먼저 짝이 되는 것 찾기
 */

// const keyPair = (arr, n) => {
//   let pair = [];
//   arr.map((v) => {
//     pair.push(n - v);
//   });
//   return arr.reduce((acc, v, i) => {
//     if (pair.includes(v)) acc.push(i);
//     if (i === arr.length - 1) {
//       if (acc.length % 2 != 0) acc.splice(acc.indexOf(arr.indexOf(n / 2)), 1);
//     }
//     // if (pair.includes(v)) if (v * 2 != n) acc.push(i);

//     return acc;
//   }, []);
// };

// O(n^2)
const keyPairOn = (arr, n) => {
  let ret;
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length; j += 1) {
      if (arr[i] + arr[j] === n) {
        ret = [i, j];
        break;
      }
    }
    if (ret) break;
  }
  return ret;
};

/*
 keyPair O(logN) version
 ex) keyPair([1, 3, 4, 5], 7)
 i         0      1      2
 val       1      3      4
 pairIdx {7-1:0, 7-3:1, ...}
 i === 4 일 때, pairIdx 두번째(4:1)을 찾아서 바로 [1, i] 반환!
*/
const keyPair = (arr, n) => {
  const pairIdx = {}; // {val:idx} : val의 값은 idx와 짝이야!
  for (let i = 0; i < arr.length; i += 1) {
    const val = arr[i];
    //idx를 구해야해서 해당 pair 값을 키로 잡고, idx 변호를 값으로 넣기
    if (pairIdx[val]) return [pairIdx[val], i];
    pairIdx[n - val] = i;
  }
};

//  idx  0  1  2  3  4
// //pairIdx {6:0, 5:1, 4:2, ..}
// const kp1 = keyPair([1, 2, 3, 4, 5], 7); // [2, 3]
// console.log("🚀  kp1:", kp1);
// const kp2 = keyPair([1, 2, 3, 4, 5], 9); // [3, 4]
// console.log("🚀  kp2:", kp2);

// const kp3 = keyPair([1, 4, 45, 6, 10, 8], 16); // [3, 4]
// console.log("🚀  kp3:", kp3);
// const kp4 = keyPair([1, 2, 4, 3, 6], 10); // [2, 4]
// console.log("🚀  kp4:", kp4);

/*
!반례 ([8,8,8,8,8,8],16)
*/
const a = keyPair([1, 4, 45, 6, 10, 8], 16); //[3,4,5]
console.log("🚀  a:", a);
const b = keyPair([1, 2, 4, 3, 6], 10); //[2,4]
console.log("🚀  b:", b);
const c = keyPair([1, 2, 3, 4, 5], 9); //[3,4]
console.log("🚀  c:", c);
const d = keyPair([1, 2, 4, 4, 9], 8); //[3,4]
console.log("🚀  d:", d);
const e = keyPair([1, 4, 45, 9, 8, 12, 8], 16); // [4,5]
console.log("🚀  e:", e);
const f = keyPair([8, 8, 8, 8, 8, 8], 16);
console.log("🚀  f:", f);

// var assert = require("assert");

// const kim = {
//   nid: 3,
//   addr: "Pusan",
//   arr: [1, 2, 3, { aid: 1 }, [10, 20]],
//   oo: {
//     id: 1,
//     name: "Hong",
//     addr: {
//       city: "Seoul",
//     },
//   },
//   xx: null,
//   yy: function () {
//     console.log(this.oo);
//   },
//   [Symbol()]: 9,
//   [Symbol()]: Symbol("symbol2"),
// };

// const deepCopy = (obj) => {
//   // 반환할 객체 저장
//   let objCopy = {};
//   // key 값을 배열로 저장
//   let object = Reflect.ownKeys(obj);

//   // obj가 배열일 경우
//   if (Array.isArray(obj)) {
//     // 반환할 배열 저장
//     let arr = [];
//     // 배열 순회 시 object일 경우 다시 재귀
//     for (let arrV of obj) {
//       if (typeof arrV === "object") arr.push(deepCopy(arrV));
//       else arr.push(arrV);
//     }
//     // 반환된 obj 값 푸쉬
//     return arr;
//   }
//   // object가 객체일 경우
//   else {
//     // key 배열 순회 시 null이 아니고 object일 경우 다시 재귀 후 객체 동적 생성
//     for (let key of object) {
//       if (obj[key] !== null && typeof obj[key] === "object")
//         objCopy[key] = deepCopy(obj[key]);
//       else objCopy[key] = obj[key];
//     }
//     return objCopy;
//   }
// };

// const newKim = deepCopy(kim);
// assert.deepStrictEqual(newKim, kim, "Not Valid Deep Copy!");

// newKim.addr = "Daegu";
// newKim.oo.name = "Kim";
// assert.notDeepStrictEqual(newKim, kim, "Not Valid Deep Copy!");
// newKim.arr[0] = 100;
// newKim.arr[3].aid = 200;
// newKim.arr[4][1] = 300;
// newKim.oo.addr.city = "Daejeon";
// console.log(
//   "Pass1?",
//   kim.arr[0] !== newKim.arr[0] && kim.arr[3].aid !== newKim.arr[3].aid
// );

// assert.notDeepStrictEqual(
//   kim.arr[4][1],
//   newKim.arr[4][1],
//   "pass2: 다르지 않아요!"
// );

// console.log("Pass3?", kim.oo.addr.city !== newKim.oo.addr.city);
// console.log(kim, newKim);
const arr = [1.2, 3];
const hong = { id: 1, name: "hong" };

const lucy = new Dog();
const kim = {
  nid: 3,
  addr: "Pusan",
  arr: [1, 2, 3, { aid: 1 }, [10, 20]],
  oo: { id: 1, name: "Hong", addr: { city: "Seoul" } },
  xx: null,
  yy: function () {
    console.log(this.oo);
  },
  yyy() {
    console.log(this.oo);
  },
  [Symbol()]: 9,
  [Symbol()]: Symbol("symbol2"),
  zs: new Set([arr, hong]),
  zws: new WeakSet([arr, hong]),
  zm: new Map([[1, arr]]),
  zwm: new WeakMap([[hong, arr]]),
  dog: lucy,
};

const newKim = deepCopy(kim);
assert.deepStrictEqual(newKim, kim, "deepCopy equal fail!");
newKim.addr = "Daegu";
newKim.oo.name = "Kim";
assert.notDeepStrictEqual(newKim, kim, "Not Valid Deep Copy!");
newKim.arr[0] = 100;
newKim.arr[3].aid = 200;
newKim.arr[4][1] = 300;
newKim.oo.addr.city = "Daejeon";
console.log(
  "Pass1?",
  kim.arr[0] !== newKim.arr[0] && kim.arr[3].aid !== newKim.arr[3].aid
);
assert.notStrictEqual(kim.arr[4][1], newKim.arr[4][1], "pass2: 다르지 않아요!");
console.log("Pass3?", kim.oo.addr.city !== newKim.oo.addr.city);

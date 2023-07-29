/**
 * *mapBy(), findBy(), filterBy(), firstObject, lastObject 만들기
 */

const hong = { id: 1, name: "Hong" };
const kim = { id: 2, name: "Kim" };
const lee = { id: 3, name: "Lee" };

const arr = [1, 2, 3, 4, 5];
arr.firstObject; // 1
arr.lastObject; // 5

const users = [hong, kim, lee]; // {id:1, name: 'Hong'}, …

Object.defineProperty(Array.prototype, "firstObject", {
  get() {
    return this[0];
  },
});

Object.defineProperty(Array.prototype, "lastObject", {
  get() {
    return this[this.length - 1];
  },
});

// mapBy method
Array.prototype.mapBy = function (k) {
  return this.map((item) => item[k]);
};

// filterBy method
Array.prototype.filterBy = function (k, v) {
  return this.filter((item) => item[k] === v);
};

// findBy method
Array.prototype.findBy = function (k, v) {
  return this.find((item) => item[k] === v);
};

// objectAt method
Array.prototype.objectAt = function (idx) {
  return this[idx];
};

const a = users[0]; // { id: 1, name: 'Hong' }
console.log("🚀  a:", a);
const b = arr.firstObject; // 1
console.log("🚀  b:", b);
const c = arr.lastObject; // 5
console.log("🚀  c:", c);
const d = users.mapBy("id"); // [1, 2, 3]
console.log("🚀  d:", d);
const e = users.mapBy("name"); // ['Hong', 'Kim', 'Lee']
console.log("🚀  e:", e);
const f = users.filterBy("id", 2); // [{ id: 2, name: 'Kim' }]
console.log("🚀  f:", f);
const g = users.findBy("name", "Kim"); // { id: 2, name: 'Kim' }
console.log("🚀  g:", g);
const h = users.objectAt(1); // { id: 2, name: 'Kim' }
console.log("🚀  h:", h);

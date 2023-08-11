const regex = /^[A-z0-9][\w-\.]*@[\w-]+\..*([A-z]{2,7})$/;
const a = regex.test("jade123@topician.com"); // true
console.log("🚀  a:", a);
const b = regex.test("jade123@topician.store"); // true
console.log("🚀  b:", b);
const d = regex.test("ja_de.j-u-n@topician.store"); // true
console.log("🚀  d:", d);
const c = regex.test("jade123@topician"); // false
console.log("🚀  c:", c);
const e = regex.test("jade@jeon@topician.store"); // false
console.log("🚀  e:", e);
const f = regex.test("jadejeon@.topician.store"); // false
console.log("🚀  f:", f);
const g = regex.test("jadejeon@.topician.store"); // false
console.log("🚀  g:", g);

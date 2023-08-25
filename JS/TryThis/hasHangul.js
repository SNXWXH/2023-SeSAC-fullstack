const hasHangul = (str) => {
  const rgx = /[ㄱ-힣]/g;
  return rgx.test(str);
};

const a = hasHangul("강원도"); //true
console.log("🚀  a:", a);
const b = hasHangul("ㄱㄴㄷ"); //true
console.log("🚀  b:", b);
const c = hasHangul("ㅜㅜㅠㅜㅠ"); //true
console.log("🚀  c:", c);
const d = hasHangul("장태민"); //true
console.log("🚀  d:", d);
const e = hasHangul("12345"); //false
console.log("🚀  e:", e);
const f = hasHangul("IC"); //false
console.log("🚀  f:", f);

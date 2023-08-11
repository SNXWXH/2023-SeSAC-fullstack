const s = "강원도 고성군 토성면 북면";

const searchKoreanInitail = (full, piece) => {
  const regex = new RegExp(`..?${piece}`, "g");
  console.log(piece);
  return full.match(regex) === null ? undefined : full.match(regex);
};

const a = searchKoreanInitail(s, "ㄱㅅㄱ"); //고성군
console.log("🚀  a:", a);
const b = searchKoreanInitail(s, "ㅌㅅㅁ"); //토성면
console.log("🚀  b:", b);
const c = searchKoreanInitail(s, "푹면"); //undefined
console.log("🚀  c:", c);

// const a = s.match(/\S\S\S/g);
// console.log("🚀  a:", a);

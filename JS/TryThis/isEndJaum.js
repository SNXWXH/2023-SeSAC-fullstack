const isEndJaum = (str) => {
  if (!str) return false;

  const lastChar = str.charAt(str.length - 1);
  // console.log("🚀  lastChar:", lastChar);

  const lastCharCode = lastChar.charCodeAt(0);

  // const startJaum = "ㄱ";
  // const endJaum = "ㅎ";
  // const jaumRange = [startJaum, endJaum];

  const ENGS = ["l", "L", "M", "m", "n", "N", "r", "R"];
  const NUMS = ["0", "1", "3", "6", "7", "8"];

  // if (jaumRange.includes(lastChar)) {
  //   return true;
  // }
  if (lastChar >= "ㄱ" && lastChar <= "ㅎ") return true;

  if (ENGS.includes(lastChar) || NUMS.includes(lastChar)) return true;

  const offset = lastCharCode - "가".charCodeAt(0);
  // console.log("🚀  offset:", offset);
  return offset % 28 > 0;
};

// 예시 테스트
console.log("강원도>>", isEndJaum("강원도")); // false
console.log("바라당>>", isEndJaum("바라당")); // true
console.log("ㅜㅜ>>", isEndJaum("ㅜㅜ")); // false
console.log("ㅜㅠ>>", isEndJaum("ㅜㅠ")); // false
console.log("ㅜㅣ>>", isEndJaum("ㅜㅣ")); // false
console.log("케잌>>", isEndJaum("케잌")); // true
console.log("23ㅁ>>", isEndJaum("23ㅁ")); // true
console.log("23ㅅ>>", isEndJaum("23ㅅ")); // true
console.log("점수 A>>", isEndJaum("점수 A")); // false
console.log("24>>", isEndJaum("24")); // false
console.log("알파벳L>>", isEndJaum("알파벳L")); // true
console.log("23>>", isEndJaum("23")); // true

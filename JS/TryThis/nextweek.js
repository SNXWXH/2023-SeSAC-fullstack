// const weeks = ["일", "월", "화", "수", "목", "금", "토"];

// const getNextWeek = (function f3() {
//   let widx = -1;
//   return function f1() {
//     widx += 1;
//     if (widx >= weeks.length) widx = 0;
//     return `${weeks[widx]}요일`;
//   };
// })();

// let cnt = 0;
// const intl = setInterval(() => {
//   console.log("call", cnt, getNextWeek());
//   if ((cnt += 1) === 10) clearInterval(intl);
// }, 1000);

const weeks = ["일", "월", "화", "수", "목", "금", "토"];

const getNextWeek = (() => {
  let widx = -1;

  return () => {
    widx += 1;
    if (widx >= weeks.length) widx = 0;
    return `${weeks[widx]}요일`;
  };
})();

let cnt = 0;
const intl = setInterval(() => {
  console.log("call", cnt, getNextWeek());
  if ((cnt += 1) === 8) clearInterval(intl);
}, 1000);

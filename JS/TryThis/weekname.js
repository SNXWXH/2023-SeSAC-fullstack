/**
 * Try This p.42
 * 오늘 날짜의 요일을 출력하는 switch문을 사용해서 작성해보고, switch문을 사용하지 않은 더 간단한 방법도 찾아보세요.
 */

const date = new Date();
const day = date.getDay();

const days = [
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
];
console.log(days[date.getDay()]);

const getWeekName = () => {
  let weekName;
  switch (date.getDay()) {
    case 0:
      weekName = "일";
      break;
    case 1:
      weekName = "월";
      break;
    case 2:
      weekName = "화";
      break;
    case 3:
      weekName = "수";
      break;
    case 4:
      weekName = "목";
      break;
    case 5:
      weekName = "금";
      break;
    case 6:
      weekName = "토";
      break;
  }
  return weekName;
};

getWeekName(date);

/**
 * simple Version
 */

//전역 변수는 대문자로 쓰는 것이 좋음
const WEEK_NAMES = "일월화수목금토";

const yyyy = date.getFullYear();
const mm = date.getMonth();
const dd = date.getDate();

const wn1 = getWeekName(date);

console.log(`${yyyy}.${mm}.${dd}은 ${wn1}요일입니다.`);

for (let i = 0; i < 10; i++) {
  const wn1 = getWeekName(date);
  const wn2 = WEEK_NAMES[date.getDay()];

  const yyyy = date.getFullYear();
  const mm = date.getMonth() + 1;
  const dd = date.getDate();

  console.log(`${yyyy}.${mm}.${dd}은 ${wn1}/${wn2}요일입니다.`);
  date.setDate(date.getDate() + 1);
}

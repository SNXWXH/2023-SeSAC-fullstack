/*
 * Try This p.42
  TODO: 특정범위(1 ~ 10) 사이의 정수에 대해 제곱근을 소숫점 3자리까지 출력하시오.
 *  - 정수는 제외
 *  - 소숫점 3자리(6 => 2.646)
 */

// for (let i = 1; i < 11; i++) {
//   const sqrt = Math.sqrt(i);
//   if (sqrt % 1 != 0) console.log(i, Math.floor(sqrt * 1000) / 1000);
// }

const print = (i, f) =>
  console.log(`${i} ===> ${f / 1000}${f % 10 === 0 ? "0" : ""}`);

function printSqrt(start, end) {
  for (let i = start; i <= end; i++) {
    const sqrt = Math.sqrt(i);
    if (sqrt % 1 === 0) continue;
    print(i, Math.floor(sqrt * 1000));
  }
}

printSqrt(20, 30);

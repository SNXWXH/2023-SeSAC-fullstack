/*
 TODO:  앞에서 작성한 다음 코드를 Promise를 이용하여 리팩토링 하시오
 */

// setTimeout(function () {
//   console.log("depth1", new Date());
//   setTimeout(function () {
//     console.log("depth2", new Date());
//     setTimeout(function () {
//       console.log("depth3", new Date());
//       throw new Error("Already 3-depth!!");
//     }, 3000);
//   }, 2000);
// }, 1000);

console.log("START!", new Date());

const promiseFn = (depth = 1) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`depth${depth}`, new Date());
      depth < 3
        ? resolve(depth + 1, new Date())
        : reject(new Error("Already 3depth"));
    }, 1000 * depth);
  });

promiseFn()
  .then((depth) => {
    return promiseFn(depth);
  })
  .then((depth) => {
    return promiseFn(depth);
  })
  .then((depth) => {
    return promiseFn(depth);
  })
  .then(promiseFn)
  .then((depth) => promiseFn(depth))
  .catch((err) => console.log(err));

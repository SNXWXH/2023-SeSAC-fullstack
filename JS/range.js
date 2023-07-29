const arr = [1, 3, 4, 2, 5, 8, 6, 7, 9];

const range = (s = 0, e = arr.length - 1) => {
  let sum = 0;
  for (let i = s; i <= e; i++) {
    sum += arr[i];
  }
  console.log(sum);
};

// const rangeSum = (s = 0, e = arr.length - 1) =>

range(2, 5); //19
range(3, 5); //15
range(1, 4); //14
range(4, 4); //5
range(2); //41
range(5); //30
range(); //45

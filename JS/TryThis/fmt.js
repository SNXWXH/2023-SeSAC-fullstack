const total = { price: 45000, vat: 4500 };

const fnt = (arr, v) => {
  //   console.log(arr, v);
  v = v.toLocaleString();
  return arr[0] + v + arr[1];
};

console.log(fnt`주문합계: ${total.price}원`);
console.log(fnt`세액합계: ${total.vat}원`);

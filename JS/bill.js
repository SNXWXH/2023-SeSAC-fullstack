/*
 TODO: 주문 받기 및 영수증 출력하기
 * * 클로저 이용
 */

const MENU = {
  짜장: { price: 7000 },
  짬뽕: { price: 9900 },
  탕수육: { price: 25000, taxfree: 1 },
};

function bill() {
  let ordered = [];
  return {
    order(item) {
      const menu = MENU[item];
      return menu.taxfree === 1
        ? ordered.push([item, menu.price, 0])
        : ordered.push([
            item,
            menu.price,
            Math.round((menu.price / 1.1) * 0.1),
          ]);
    },
    printBill() {
      let sum = 0;
      let taxSum = 0;
      console.log("=".repeat(20));
      for (let [food, supply, vat] of ordered) {
        sum += supply;
        taxSum += vat;
        supply = supply.toLocaleString();
        vat = vat.toLocaleString();
        console.log(`*${food}`);
        console.log(` 공급가액:${" ".repeat(8 - supply.length)}${supply}원`);
        console.log(` 부가세액:${" ".repeat(8 - vat.length)}${vat}원`);
        console.log(" -".repeat(10));
      }
      sum = sum.toLocaleString();
      taxSum = taxSum.toLocaleString();
      console.log(` 주문합계:${" ".repeat(8 - sum.length)}${sum}원`);
      console.log(` 세액합계:${" ".repeat(8 - taxSum.length)}${taxSum}원`);
      console.log("=".repeat(20));
    },
  };
}

const table1 = bill();
const table2 = bill();
table1.order("짜장");
table1.order("짬뽕");
table1.order("짬뽕");
table1.printBill();

table1.order("탕수육");
table1.printBill();

table2.order("짬뽕");
table2.printBill();

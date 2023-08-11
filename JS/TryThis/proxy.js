/*
 TODO: Emp type의 hong 객체에 fullName 기능을 Aeecssor Property를 사용하지 말고, proxy생성자 함수를 이용하여 구현하시오
 */

class Emp {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // accessor
  // get fullName() {
  //   return `${this.firstName} ${this.lastName}`;
  // }
}

const hong = new Emp("Gildong", "Hong");

const proxyHong = new Proxy(hong, {
  get(target, prop) {
    // console.log('get>>', target, prop);
    if (prop === "fullName") {
      return `${target.firstName} ${target.lastName}`;
    } else {
      return target[prop];
    }
  },

  set(target, prop, value) {
    // console.log('set>>', target, prop, value);
    if (prop === "fullName") {
      const [f, l] = value.split(" ");
      target.firstName = f;
      target.lastName = l;
    }
  },
});

console.log(proxyHong.fullName);
proxyHong.fullName = "Kildong Hong";
console.log(proxyHong.fullName);

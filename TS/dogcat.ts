class Animal {
  #name;

  constructor(name: string) {
    this.#name = name;
  }
  bark() {}
  getName() {
    return this.#name;
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
  bark(): void {
    console.log("멍멍");
  }
}
class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }
  bark(): void {
    console.log("야옹");
  }
}

const x = new Dog(new Cat("개냥이"));
const fns = {
  barkDog() {
    console.log("왕왕");
    return this;
  },
  barkCat() {
    console.log("야용");
    return this;
  },
};

//빌더 패턴 -> 계속 꼬리 물고 이어 나가는 것
fns.barkCat().barkDog();

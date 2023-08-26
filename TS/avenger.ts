/*
 * 두개의 클래스를 상속을 받지 않고 합치는 것!
 */
interface Avengers {
  moveout(): void;
}

class Avenger implements Avengers {
  constructor(public name: string) {}
  moveout() {}
}

//중간 레이데이터
//공통기능 모아두기(부모)
// class BaseAvengers implements Avengers {
class BaseAvengers {
  constructor(public avenger: Avengers) {}
  moveout() {
    this.avenger.moveout();
  }
}

//스파이더맨의 능력을 가지고 있는거임 -> 사람 아님
class SpiderMan extends BaseAvengers {
  moveout() {
    //super.을 해줘야
    super.moveout();
    console.log("SpiderWeb!");
  }
}

class IronMan extends BaseAvengers {
  moveout() {
    super.moveout();
    console.log("Parmfire!");
  }
}

//피터에게 스파이더맨, 아이언맨 능력 부여하기
const a = new Avenger("Peter");

//이렇게 되면 인스턴스가 두개가 됨(클래스 데코레이터)
// const s = new SpiderMan(a);
// s.moveout();

// const i = new IronMan(a);
// i.moveout();

//데코레이터
const si = new IronMan(new SpiderMan(a));
si.moveout();

type A = [string, number];
type B = [boolean, A]; //[boolean, [string,number]]
type C = [boolean, ...A]; //[boolean, string, number]
//튜플
const b: B = [false, ["a", 0]];
const c: C = [false, "a", 0];

type Arr = (string | number)[];
//튜플
type Brr = [boolean, Arr]; //튜플에서 불린 값과, array 둘로 두개의 값이 있는 튜플
type Crr = [boolean, ...Arr]; //튜플이긴 한데 Arr을 풀어버려서 얼마나 올지 모름 -> 가변적

const bb: Brr = [false, ["a", 1, 2]];
const cc: Crr = [false, "a", 1, 2]; //false 이후의 것들이 rest로 넘겨짐 -> 가변적

const ratings = {
  imdb: 8.4,
  metacritic: 82,
};

type K = keyof typeof ratings;
// Copy<T> = [K in ratings]:T[K]
// type V = keyof typeof

const UserState = {
  준비: 1,
  진행중: 2,
  done: 3,
  cancel: 8,
  withdraw: 9,
  etc: 0,
};
type State = (typeof UserState)[keyof typeof UserState];
type User = {
  id: number;
  name: string;
  state: State;
};

const hong: User = {
  id: 1,
  name: "Hong",
  state: 9,
};
const kim: User = {
  id: 2,
  name: "Kim",
  state: 0,
};

//return type이 void로 뜨는데 never임
function f() {
  throw "aaa";
}

// const a = new Map([1,'hi'],[2,'hw']);

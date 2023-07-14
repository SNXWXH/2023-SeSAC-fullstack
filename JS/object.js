const user = {
  "": 1,
  " ": 1,
  123: 1,
  "12345n": 2,
  true: 1,
  id: 2,
  name: "Hong",
  [Symbol()]: "Hong",
  [Symbol()]: "Kim",
  [`${new Date()}`]: 365,
  "my-friends": ["Han", "Kim"],
  getInfo: function () {
    return `${this.id}-${this.name}`;
  },
};

console.log(user);
console.log(Object.keys(user));
console.log(Object.entries(user));
console.log(Reflect.ownKeys(user));
console.log(Object.getOwnPropertySymbols(user));

console.log(Object.getOwnPropertySymbols(user).map((sb) => user[sb]));

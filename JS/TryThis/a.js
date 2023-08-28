const users = [
  { id: 1, name: "Hong" },
  { id: 2, name: "Kim" },
  { id: 3, name: "Lee" },
];

const deleteObjectArray = (arr, ...args) => {
  const [k, v] = args;
  return arr.filter((a, i) => (v === undefined ? i !== k : a[k] !== v));
};

console.log(deleteObjectArray(users, 2)); // Hong, Kim
console.log(deleteObjectArray(users, "id", 2)); // Hong, Lee
console.log(deleteObjectArray(users, "name", "Lee")); // Hong, Kim

/*
  TODO: class와 Array를 이용하여 Stack과 Queue를 구현하시오
 * 공통: clear(), toArray(), print(), isEmpty, peek, poll, remove, length
 * peek: 가장 (Stack: 나중, Queue: 먼저) 들어간 요소 반환(요소 삭제 없음)
 * poll: 가장 (Stack: 나중, Queue: 먼저) 들어간 요소 삭제 & 반환 <=> Stack.pop, Queue.dequeue
 * remove: 가장 (Stack: 나중, Queue: 먼저) 들어간 요소 삭제
 */
class collaboration {
  #arr = [];

  get arr() {
    return this.#arr;
  }

  clear() {
    this.#arr = [];
  }

  toArray() {
    return [...this.#arr];
  }

  print() {
    console.log(this.#arr);
  }

  get isEmpty() {
    return this.#arr.length === 0 ? true : false;
  }

  get length() {
    return this.#arr.length;
  }
}
class Stack extends collaboration {
  push(item) {
    super.arr.push(item);
  }

  pop() {
    return super.arr.pop();
  }

  get peek() {
    return super.arr[super.arr.length - 1];
  }

  get poll() {
    return stack.pop();
  }

  get remove() {
    super.arr.pop();
  }
}

const stack = new Stack();
stack.push(3);
stack.push(5);
stack.push(7);
stack.push(2);
stack.push(8);

stack.print();
const a = stack.toArray();
console.log("🚀  a:", a);
a[0] = 5;
console.log("🚀  a:", a);
stack.print();

stack.pop();
stack.print();

const b = stack.peek;
console.log("🚀  b:", b);

const c = stack.poll;
console.log("🚀  c:", c);

stack.print();
const d = stack.remove;
console.log("🚀  d:", d);

stack.print();

if (!stack.isEmpty) stack.clear();
stack.print();

console.log("=====================");

class Queue extends collaboration {
  enqueue(item) {
    super.arr.push(item);
  }

  dequeue() {
    return super.arr.shift();
  }

  get peek() {
    return super.arr[0];
  }

  get poll() {
    return queue.dequeue();
  }

  get remove() {
    super.arr.shift();
  }
}

const queue = new Queue();

queue.enqueue(3);
queue.enqueue(5);
queue.enqueue(7);
queue.enqueue(2);
queue.enqueue(8);

queue.print();
const e = queue.toArray();
console.log("🚀  e:", e);
e[0] = 5;
console.log("🚀  e:", e);

queue.print();

queue.dequeue();
queue.print();

const f = queue.peek;
console.log("🚀  f:", f);

const g = queue.poll;
console.log("🚀  g:", g);

queue.print();
const h = queue.remove;
console.log("🚀  h:", h);

queue.print();

if (!queue.isEmpty) queue.clear();
queue.print();

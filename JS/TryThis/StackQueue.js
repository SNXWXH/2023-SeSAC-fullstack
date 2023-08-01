/*
 * *class와 Array를 이용하여 Stack과 Queue를 구현하시오
 */
class collaboration {
  #arr = [];
  // constructor(a) {
  //   this.#arr = a;
  // }
  get arr() {
    return this.#arr;
  }
  print() {
    // for (const v of this.#arr) {
    //   console.log(`${v} `);
    // }
    console.log(this.#arr);
  }
}
class Stack extends collaboration {
  // constructor(a) {
  //   super(a);
  // }
  push(item) {
    super.arr.push(item);
  }

  pop() {
    return super.arr.pop();
  }
}

class Queue extends collaboration {
  // constructor(a) {
  //   super(a);
  // }
  enqueue(item) {
    super.arr.push(item);
  }

  dequeue() {
    return super.arr.shift();
  }
}

const stack = new Stack();
stack.push(3);
stack.push(5);
stack.push(7);
stack.push(2);
stack.print();

console.log(stack.pop());
stack.print();

const queue = new Queue();
queue.enqueue(3);
queue.enqueue(7);
queue.enqueue(9);
queue.print();

console.log(queue.dequeue());
queue.print();

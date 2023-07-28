/*
 * *class와 Array를 이용하여 Stack과 Queue를 구현하시오
 */
class Stack {
  #sta = [];

  push(num) {
    this.#sta.push(num);
  }

  pop() {
    return this.#sta.pop();
  }
}

class Queue {
  #que = [];

  enqueue(num) {
    this.#que.push(num);
  }

  dequeue() {
    return this.#que.shift();
  }
}

const stack = new Stack();
stack.push(3);
stack.push(5);
stack.push(7);
stack.push(2);

console.log(stack.pop());

const queue = new Queue();
queue.enqueue(3);
queue.enqueue(7);
queue.enqueue(9);

console.log(queue.dequeue());

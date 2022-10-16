const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this._head = null;
    this.tail = null;
    this.length = 0;
  }

  getUnderlyingList() {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    return this._head;
  }

  enqueue(value) {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    const node = new ListNode(value);

    if (this._head) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this._head = node;
      this.tail = node;
    }

    this.length++;
  }

  dequeue() {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    const current = this._head;
    this._head = this._head.next;
    this.length--;

    return current.value;
  }
}

module.exports = {
  Queue,
};

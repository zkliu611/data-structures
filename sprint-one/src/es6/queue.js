var index = 0;

class Queue {
 
  constructor() {
    this.storage = {};
  }

  enqueue (value) {
    index++;
    this.storage[index] = value;
  }

  dequeue () {
    var firstKey = Object.keys(this.storage)[0];
    var val = this.storage[firstKey];
    delete this.storage[firstKey];
    return val;
  }

  size () {
    return Object.keys(this.storage).length;
  }

}

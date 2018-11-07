class Stack {

  constructor() {
    this.storage = {};
  }

  push (value) {
    var length = Object.keys(this.storage).length;
    this.storage[length] = value;
  }

  pop () {
    var length = Object.keys(this.storage).length;
    var val = this.storage[length - 1];
    delete this.storage[length - 1];
    return val;
  }

  size () {
    return Object.keys(this.storage).length;
  }

}

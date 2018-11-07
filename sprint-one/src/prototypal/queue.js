var Queue = function() {
  var someInstance = Object.create(Queue.prototype);
  someInstance.storage = {};
  return someInstance;
};

var queueMethods = {};
var index = 0;

Queue.prototype.enqueue = function(value) {
  index++;
  this.storage[index] = value;
};

Queue.prototype.dequeue = function() {
  var firstKey = Object.keys(this.storage)[0];
  var val = this.storage[firstKey];
  delete this.storage[firstKey];
  return val;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};



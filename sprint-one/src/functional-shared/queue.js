var Queue = function() {
  var someInstance = {};
  someInstance.storage = {};

  _.extend(someInstance, queueMethods);

  // someInstance.enqueue = queueMethods.enqueue;
  // someInstance.dequeue = queueMethods.dequeue;
  // someInstance.size = queueMethods.size;

  return someInstance;
};

var queueMethods = {};
var index = 0;

queueMethods.enqueue = function(value) {
  index++;
  this.storage[index] = value;
};

queueMethods.dequeue = function() {
  var firstKey = Object.keys(this.storage)[0];
  var val = this.storage[firstKey];
  delete this.storage[firstKey];
  return val;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};


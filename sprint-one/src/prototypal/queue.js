var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
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



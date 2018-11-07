var Queue = function() {
  this.storage = {};
};

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
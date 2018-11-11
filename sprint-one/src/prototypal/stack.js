var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  var length = Object.keys(this.storage).length;
  this.storage[length] = value;
};

stackMethods.pop = function() {
  var length = Object.keys(this.storage).length;
  var val = this.storage[length - 1];
  delete this.storage[length - 1];
  return val;
};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};



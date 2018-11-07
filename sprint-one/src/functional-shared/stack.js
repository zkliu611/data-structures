var Stack = function() {
  var someInstance = {};
  someInstance.storage = {};

  _.extend(someInstance, stackMethods);

  // someInstance.push = stackMethods.push;
  // someInstance.pop = stackMethods.pop;
  // someInstance.size = stackMethods.size;

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
var Stack = function() {
  this.storage = {};
};

Stack.prototype.push = function(value) {
  var length = Object.keys(this.storage).length;
  this.storage[length] = value;
};

Stack.prototype.pop = function() {
  var length = Object.keys(this.storage).length;
  var val = this.storage[length - 1];
  delete this.storage[length - 1];
  return val;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};



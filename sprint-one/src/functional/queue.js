var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var index = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    index++;
    storage[index] = value;
  };

  someInstance.dequeue = function() {
    var firstKey = Object.keys(storage)[0];
    var val = storage[firstKey];
    delete storage[firstKey];
    return val;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};

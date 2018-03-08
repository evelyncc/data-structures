var Queue = function() {
  var someInstance = {};
  var firstIndex = 0;
  var currentIndex = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[currentIndex] = value;
    var enqueueIndex = currentIndex;
    currentIndex++;
    return storage[enqueueIndex];
  };

  someInstance.dequeue = function() {
    if (currentIndex > firstIndex) {
      var dequeueValue = storage[firstIndex];
      delete storage[firstIndex];
      firstIndex++;
      return dequeueValue;
    }
  };

  someInstance.size = function() {
    if (currentIndex - firstIndex < 0) {
      return 0;
    }
    return currentIndex - firstIndex;
  };

  return someInstance;
};

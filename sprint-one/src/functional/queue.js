var Queue = function() {
  var someInstance = {};
  var firstIndex = 0;
  var currentIndex = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[currentIndex] = value;
    var pushIndex = currentIndex;
    currentIndex++;
    return storage[pushIndex];
  };

  someInstance.dequeue = function() {
    if (currentIndex > 0) {
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

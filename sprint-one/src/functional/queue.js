var Queue = function() {
  var someInstance = {};
  var firstIndex = 0;
  var currentIndex = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    someInstance[currentIndex] = value;
    var pushIndex = currentIndex;
    currentIndex++;
    return someInstance[pushIndex];
  };

  someInstance.dequeue = function() {
    if (currentIndex > 0) {
      storage[firstIndex] = someInstance[firstIndex];
      delete someInstance[firstIndex];
      var popIndex = firstIndex;
      firstIndex++;
      return storage[popIndex];
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

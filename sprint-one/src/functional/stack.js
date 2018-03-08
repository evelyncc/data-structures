var Stack = function() {
  var someInstance = {};
  var currentIndex = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[currentIndex] = value;
    var pushIndex = currentIndex;
    currentIndex++;
    return storage[currentIndex - 1];
  };

  someInstance.pop = function() {
    if (currentIndex > 0) {
      currentIndex--;
      var popValue = storage[currentIndex];
      delete storage[popIndex];
      return popValue;
    }
  };

  someInstance.size = function() {
    return currentIndex;
  };

  return someInstance;
};

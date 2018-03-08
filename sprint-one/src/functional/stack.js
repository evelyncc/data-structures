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
    return storage[pushIndex];
  };

  someInstance.pop = function() {
    if (currentIndex > 0) {
      var popIndex = currentIndex - 1;
      var popValue = storage[popIndex];
      delete storage[popIndex];
      currentIndex--;
      return popValue;
    }
  };

  someInstance.size = function() {
    return currentIndex;
  };

  return someInstance;
};

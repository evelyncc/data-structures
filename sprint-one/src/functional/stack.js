var Stack = function() {
  var someInstance = {};
  var currentIndex = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    someInstance[currentIndex] = value;
    var pushIndex = currentIndex;
    currentIndex++;
    return someInstance[pushIndex];
  };

  someInstance.pop = function() {
    if (currentIndex > 0) {
      var popIndex = currentIndex - 1;
      storage[popIndex] = someInstance[popIndex];
      delete someInstance[popIndex];
      currentIndex--;
      return storage[popIndex];
    }
  };

  someInstance.size = function() {
    return currentIndex;
  };

  return someInstance;
};

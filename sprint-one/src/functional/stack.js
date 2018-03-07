var Stack = function() {
  var someInstance = {};
  var size = 0;
  var currentIndex = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    someInstance[currentIndex] = value;
    var pushIndex = currentIndex;
    size++
    currentIndex++;
    return someInstance[pushIndex];
  };

  someInstance.pop = function() {
    if (size > 0) {
      var popIndex = currentIndex - 1;
      storage[popIndex] = someInstance[popIndex];
      size--;
      currentIndex--;
      return storage[popIndex];
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};

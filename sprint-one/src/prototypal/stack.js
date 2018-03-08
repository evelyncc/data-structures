var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = Object.create(stackMethods)
  someInstance.currentIndex = 0;
  someInstance.storage = {};

  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.currentIndex] = value;
    this.currentIndex++;
    return this.storage[this.currentIndex - 1];
  },
  pop: function() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      var popValue = this.storage[this.currentIndex];
      delete this.storage[this.currentIndex];
      return popValue;
    }
  },
  size: function() {
    return this.currentIndex;
  }
};

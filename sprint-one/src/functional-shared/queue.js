var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    firstIndex: 0,
    currentIndex: 0,
    storage: {}
  }

  extend(someInstance, queueMethods);
  return someInstance;
};

var extend = function(obj, methodsObj) {
  for (var key in methodsObj) {
    obj[key] = methodsObj[key]
  }
  return obj;
}

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.currentIndex] = value;
    this.currentIndex++;
    return this.storage[this.currentIndex - 1];
  },
  dequeue: function() {
    if (this.currentIndex > this.firstIndex) {
    var dequeueValue = this.storage[this.firstIndex];
    this.firstIndex++;
    return dequeueValue;
    }
  },
  size: function() {
    if (this.currentIndex - this.firstIndex < 0) {
      return 0;
    }
    return this.currentIndex - this.firstIndex;
  }
};

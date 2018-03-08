var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    currentIndex: 0,
    storage : {}
  };

  extend(someInstance, stackMethods);
  return someInstance;
};

var extend = function(obj, methodsObj) {
  for (var key in methodsObj) {
    obj[key] = methodsObj[key];
  }
  return obj;
}

var stackMethods = {
  push: function(value) {
    var pushIndex = this.currentIndex;
    this.storage[pushIndex] = value;
    this.currentIndex++
    return this.storage[pushIndex];
  },
  pop: function() {
    if (this.currentIndex > 0) {
    this.currentIndex--;
    var popIndex = this.currentIndex;
    var popValue = this.storage[popIndex];
    delete this.storage[popIndex];
    return popValue;
    }
  },
  size: function() {
    return this.currentIndex;
  }
};

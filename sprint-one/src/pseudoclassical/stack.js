var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.currentIndex = 0;
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.storage[this.currentIndex] = value;
  this.currentIndex++;
  return this.storage[this.currentIndex - 1];
};

Stack.prototype.pop = function() {
  if (this.currentIndex > 0) {
    this.currentIndex--;
    var popValue = this.storage[this.currentIndex];
    delete this.storage[this.currentIndex];
    return popValue;
  }
}
Stack.prototype.size = function() {
  return this.currentIndex;
};

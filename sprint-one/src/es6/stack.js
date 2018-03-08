class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.currentIndex = 0;
    this.storage = {};
  };

  push(value) {
    this.storage[this.currentIndex] = value;
    this.currentIndex++;
    return this.storage[this.currentIndex - 1];
  };

  pop() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      var popValue = this.storage[this.currentIndex];
      delete this.storage[this.currentIndex];
      return popValue;
    }
  };

  size() {
    return this.currentIndex;
  };
}

class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.firstIndex = 0;
    this.currentIndex = 0;
    this.storage = {};
  };

  enqueue(value) {
    this.storage[this.currentIndex] = value;
    this.currentIndex++;
    return this.storage[this.currentIndex - 1];
  };

  dequeue() {
    if (this.currentIndex > this.firstIndex) {
    var dequeueValue = this.storage[this.firstIndex];
    this.firstIndex++
    return dequeueValue;
    }
  };

  size() {
    if (this.currentIndex - this.firstIndex < 0) {
      return 0;
    } else {
      return this.currentIndex - this.firstIndex;
    }
  };
}

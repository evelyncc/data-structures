

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = [];
  var keyExists = false;

  if (!Array.isArray(this._storage.get(index))) {
    this._storage.set(index, bucket);
  }

  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      this._storage.get(index)[i][1] = v;
      exist = true;
    }
  }
  if (!keyExists) {
    this._storage.get(index).push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      return this._storage.get(index)[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this.insert(k, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
  insert - best case O(1), worst case O(n)
  retrieve - best case O(1), worst case O(n)
  remove - best case O(1), worst case O(n)
 */



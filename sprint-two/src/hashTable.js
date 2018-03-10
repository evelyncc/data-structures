

var HashTable = function() {
  this._minimumLimit = 8;
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._storageCount = 0;
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

  if ((this._storageCount/this._limit) >= .75) {
    this._limit *= 2;  
    this.resize();
  }
  this._storageCount++;
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

  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      this._storage.get(index).splice(i, 1)
      if (this._storageCount > 0) {
        this._storageCount--;
      }
    }
  }

  if ((this._storageCount/this._limit) <= .25) {
    if (this._limit !== this._minimumLimit) {
      this._limit /= 2;
      this.resize();
    }
  }  
};

HashTable.prototype.resize = function() {
  var pairs = [];
  this._storage.each(function(bucket) {
    if (bucket) {
      for (var i = 0; i < bucket.length; i++) {
          pairs.push(bucket[i]);
      }
    } 
  });

  this._storage = LimitedArray(this._limit);
  this._storageCount = 0;

  for (var pairsIndex = 0; pairsIndex < pairs.length; pairsIndex++) {
    this.insert(pairs[pairsIndex][0], pairs[pairsIndex][1]);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
  insert - best case O(1), worst case O(n)
  retrieve - best case O(1), worst case O(n)
  remove - best case O(1), worst case O(n)
 */



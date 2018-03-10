var BinarySearchTree = function(value) {
  var node = {};
  node.value = value;
  node.left = null;
  node.right = null;

  node.insert = function(value) {
    if (node.value < value) {
      if (!node.right) {
        node.right = BinarySearchTree(value);
      } else {
        node.right.insert(value);
      }
    }
    if (node.value > value) {
      if (!node.left) {
        node.left = BinarySearchTree(value);
      } else {
        node.left.insert(value);
      } 
    } 
  };

  node.contains = function(value) {
    var result = false;
    if (node.value === value) {
      result = true;
    } else {
      if (node.value < value) {
        if (node.right) {
          result = node.right.contains(value);
        }
      }
      if (node.value > value) {
        if (node.left) {
          result = node.left.contains(value);
        }
      }
    }
    return result;
  };

  node.depthFirstLog = function(cb) {
    cb(node.value);
    if (node.left) {
      node.left.depthFirstLog(cb);
    }
    if (node.right) {
      node.right.depthFirstLog(cb);
    }
  };
  
  return node;
};


/*
 * Complexity: What is the time complexity of the above functions?
  insert - O(log n)
  contains - O(log n)
  depthFirstLog - O(n)
 */

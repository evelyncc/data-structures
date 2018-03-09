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
  
  };

  node.depthFirstLog = function(cb) {

  };
  
  return node;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

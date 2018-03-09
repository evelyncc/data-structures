var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree,treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target, node) {
  node = node || this;
  var result = false;
  if (node.value === target) {
    result = true;
  } else if (node.children.length > 0) {
     for (var i = 0; i < node.children.length; i++) {
      if (node.contains(target, node.children[i])) {
        result = true;
      };
    }
  }
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
    addChild = O(1)
    contains = O(n)
*/

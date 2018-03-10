

// Instantiate a new graph
var Graph = function() {
  this.edge = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = {value: node};
  this.edge[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this[node]) {
    if (this[node].value === node) {
      return true;
    }
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var removeEdges = this.edge[node];
  if (this[node].value === node) {
    for (var i = 0; i < removeEdges.length; i++) {
      for (var x = 0; x < this.edge[removeEdges[i]].length; x++) {
        if (this.edge[removeEdges[i]][x] === node) {
          this.edge[removeEdges[i]].splice(x, 1);
        }
      }
    }
    delete this[node];
  } 
};

// Returns a boolean indicating whether two specified nodes are connected.  
// Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.edge[fromNode]) {
    for (var i = 0; i < this.edge[fromNode].length; i++) {
      if (this.edge[fromNode][i] === toNode) {
        return true;
      }
    }  
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edge[fromNode].push(toNode);
  this.edge[toNode].push(fromNode);
}; 

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.edge[fromNode]) {
    for (var i = 0; i < this.edge[fromNode].length; i++) {
      if (this.edge[fromNode][i] === toNode) {
        this.edge[fromNode].splice(i, 1);
      }
    }
  }
  if (this.edge[toNode]) {
    for (var i = 0; i < this.edge[toNode].length; i++) {
      if (this.edge[toNode][i] === fromNode) {
        this.edge[toNode].splice(i, 1);
      }
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  var nodeValues = [];
  for (var key in this) {
    if (this[key].value) {
      nodeValues.push(this[key].value);
    }
  }
  _.each(nodeValues, cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
  addNode - O(1)
  contains - O(1)
  removeNode - O(n)
  hasEdge - O(n)
  addEdge - O(1)
  removeEdge - O(n)
  forEachNode - O(n)  
 */



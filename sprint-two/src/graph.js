

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = {value: node};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.nodes[node]) {
    if (this.nodes[node].value === node) {
      return true;
    }
  } else {
     return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.nodes[node].value === node) {
    if (this.nodes[node].edge) {
    var removeEdge = this.nodes[node].edge.to
    delete this.nodes[removeEdge].edge;
    }
    delete this.nodes[node];
  } 
};

// Returns a boolean indicating whether two specified nodes are connected.  
// Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.nodes[fromNode].edge) {
    if (this.nodes[fromNode].edge.from === fromNode && this.nodes[fromNode].edge.to === toNode) {
      return true;
    } else if (this.nodes[toNode].edge) {
      if (this.nodes[toNode].edge.from === fromNode && this.nodes[toNode].edge.to === toNode) {
        return true;
      }
    } 
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].edge = {from: fromNode, to: toNode};
  this.nodes[toNode].edge = {from: toNode, to: fromNode};
}; 

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.nodes[fromNode].edge.from === fromNode && this.nodes[fromNode].edge.to === toNode) {
    delete this.nodes[fromNode].edge;
    delete this.nodes[toNode].edge;
  } else if (this.nodes[toNode].edge.from === fromNode && this.nodes[toNode].edge.to === toNode) {
    delete this.nodes[fromNode].edge;
    delete this.nodes[toNode].edge;
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  var nodeValues = [];
  for (var key in this.nodes) {
    nodeValues.push(this.nodes[key].value)
  }
  _.each(nodeValues, cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
  addNode - O(1)
  contains - O(1)
  removeNode - O(1)
  hasEdge - O(1)
  addEdge - O(1)
  removeEdge - O(1)
  forEachNode - O(n)  
 */



var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  
  list.addToTail = function (value) {
    var node = Node(value);
    if (list.tail === null) {
      list.tail = node;
      list.head = node;
    } else {
      node.previous = list.tail;
      list.tail.next = node;
      list.tail = node;
    }
  };
  
  list.removeHead = function() {
    var oldHead = list.head;
    if (list.head.next) {
      list.head.next.previous = null;
    }
    list.head = list.head.next;
    return oldHead.value;
  };

  list.contains = function(target) {
    var currentNode = list.head;
    if (list.head.value === target) {
      return true;
    }
    if (list.tail.value === target) {
      return true;
    }
    while (currentNode.next !== null) {
      if (currentNode.value === target) {
        return true;  
      } else {
        currentNode = currentNode.next;
      }
    }
    return false;
  };

  list.addToHead = function(value) {
    var node = Node(value);
    if (list.head === null) {
      list.head = node;
      list.tail = node;
    } else {
      node.next = list.head;
      list.head.previous = node;
      list.head = node;
    }
  };

  list.removeTail = function() {
    var oldTail = list.tail;
    if (list.tail.previous) {
      list.tail.previous.next = null;
    }
    list.tail = list.tail.previous;
    return oldTail.value;
  };

  return list;
};

var Node = function(value) {
  var node = {};
  node.value = value;
  node.previous = null;
  node.next = null;

  return node;
};


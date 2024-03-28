// Use classes, attributes, and methods in the JavaScript language for all challenges. Use only a single JavaScript file for this assignment. All examples are done in order, starting with a new instance of the SLL class.

 class SLL {
     // constructor, other methods, removed for brevity
    constructor() {
        this.head = null;
    }

// Add Front
//Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.

    addFront(value) {
        const newNode = { data: value, next: this.head };
        this.head = newNode;
        return this.head;
    }

// Remove Front
// Write a method to remove the head node and return the new list head node. If the list is empty, return null.

    removeFront() {
        if (!this.head) {
            return null;
        }
        const removedNode = this.head;
        this.head = this.head.next;
        return removedNode;
    }

// Front
// Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.
   
    front() {
        return this.head ? this.head.data : null;
    }
 }

const SLL1 = new SLL();
console.log(SLL1.addFront(18)); // => Node { data: 18, next: null }
console.log(SLL1.addFront(5)); // => Node { data: 5, next: Node { data: 18, next: null } }
console.log(SLL1.addFront(73)); // => Node { data: 73, next: Node { data: 5, next: Node { data: 18, next: null } } }


console.log(SLL1.removeFront()); // => Node { data: 5, next: Node { data: 18, next: null } }
console.log(SLL1.removeFront()); // => Node { data: 18, next: null }



console.log(SLL1.front()); // => 18
console.log(SLL1.removeFront()); // => null
console.log(SLL1.front()); // => null

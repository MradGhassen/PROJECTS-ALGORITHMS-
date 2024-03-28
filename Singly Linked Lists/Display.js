
// Create display() that uses a while loop and a runner to return a string containing all list values. Build what you wish console.log(myList) did!

 class SLL {
    // constructor, other methods, removed for brevity
    display() {
    	// neatly display nodes in my list
      let runner = this.head;
        let result = '';
        while (runner) {
            result += runner.data;
            if (runner.next) {
                result += ', ';
            }
            runner = runner.next;
        }
        return result;
    }
 }


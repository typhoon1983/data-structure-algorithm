export default class ListLinked {

  /*
   *  Constructor, generate the LinkList instance by passing in an array of values and specifying a maxSize of the element list.
   */
  constructor(elements = []) {
    if(new.target.name === 'ListLinked'){
      throw new TypeError('ListLinked can not be used as constructor directly.')
    }
    this.NodeType = new.target.nodeType;
    this.head = new this.NodeType();
    this.length = 0;
    elements.reduce((accumulator,currentValue)=>{
      let node = new this.NodeType(currentValue);
      accumulator.setLink(node);
      this.length++;
      return node;
    },this.head)
  }

  /*
   *  Empty the LinkList
   *  @return this LinkList after empty.
   */
  clearList(){
    this.length = 0;
    this.head.next = this.tail;
    return this;
  }

  /*
   *  Get element by specify index(1-based)
   *  @param i, index(1-based)
   *  @return the element on the specified index
   */
  getElement(i){
    let currentNode = this.head;
    while(i > 0 && currentNode.next !== this.tail){
      currentNode = currentNode.next;
      i--;
    }
    return i > 0 ? this.head : currentNode;
  }

  /*
   *  Return element(first appearance) index(1-based) by specify a value
   *  @param x, the value target element holds
   *  @return the index(1-based) of the target element if exists, otherwise null
   */
  getElementIndex(x){
    let currentNode = this.head.next, i = 0;
    while(currentNode !== this.tail){
      i++;
      if(currentNode.data === x){
        return i;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  /*
   *  Insert element at the specified index(1-based)
   *  @param x, value the element holds
   *  @param i, index(1-based)
   *  @return this LinkList after insert
   */
  insertElement(x,i){
    if(i > 0 && i <= this.length + 1){
      let prevNode = this.getElement(i-1);
      let newNode = new this.NodeType(x);
      [prevNode.next, newNode.next] = [newNode, prevNode.next];
      this.length++;
      return this;
    }
    return null;
  }

  /*
   *  Delete element at the specified index(1-based)
   *  @param i, index(1-based)
   *  @return this LinkList after deletion
   */
  deleteElement(i){
    if(i > 0 && i <= this.length){
      let prevNode = this.getElement(i-1);
      let currentNode = this.getElement(i);
      prevNode.next = currentNode.next;
      this.length--;
      return this;
    }
    return null;
  }
}

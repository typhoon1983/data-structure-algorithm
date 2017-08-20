import {SinglyLinkedNode} from './_Node';

export default class SinglyLinkedList {

  /*
   *  Constructor, generate the LinkList instance by passing in an array of values and specifying a maxSize of the element list.
   */
  constructor(elements = []) {
    this.head = new SinglyLinkedNode();
    this.length = 0;
    elements.reduce((accumulator,currentValue)=>{
      let node = new SinglyLinkedNode(currentValue);
      accumulator.next = node;
      this.length++;
      return node;
    },this.head)
  }

  /*
   *  Empty the LinkList
   *  @return this LinkList after empty.
   */
  clearList(){
    this.head.next = null;
    this.length = 0;
    return this;
  }

  /*
   *  Find element by specify index(1-based)
   *  @param i, index(1-based)
   *  @return value of the element on the specified index
   */
  findElement(i){
    let currentNode = this.head;
    while(i > 0 && currentNode.next){
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
    let currentNode = this.head, i = 0;
    while(currentNode.next){
      i++;
      if(currentNode.next.data === x){
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
      let prevNode = this.findElement(i-1);
      let newNode = new SinglyLinkedNode(x);
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
      let prevNode = this.findElement(i-1);
      let currentNode = this.findElement(i);
      prevNode.next = currentNode.next;
      this.length--;
      return this;
    }
    return null;
  }
}

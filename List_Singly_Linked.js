export class SinglyLinkedListNode {
  constructor(data = null, next = null) {
    this.data = data;
    this.next = next;
  }
}

export default class SinglyLinkedList {

  /*
   *  Constructor, generate the LinkList instance by passing in an array of values and specifying a maxSize of the element list.
   */
  constructor(elements = []) {
    this.head = new SinglyLinkedListNode();
    this.length = 0;
    elements.reduce((accumulator,currentValue)=>{
      let node = new SinglyLinkedListNode(currentValue);
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
   *  Get element by specify index(1-based)
   *  @param i, index(1-based)
   *  @return value of the element on the specified index
   */
  getElement(i){
    let currentNode = this.head;
    while(i > 0 && currentNode.next){
      currentNode = currentNode.next;
      i--;
    }
    return i > 0 ? null : currentNode.data;
  }

  /*
   *  Return element(first appearance) index(1-based) by specify a value
   *  @param x, the value target element holds
   *  @return the index(1-based) of the target element if exists, otherwise null
   */
  findElement(x){
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
    let currentNode = this.head;
    let newNode = new SinglyLinkedListNode(x);
    if(i <= this.length + 1){
      while(i > 0){
        if(i == 1){
          [currentNode.next, newNode.next] = [newNode, currentNode.next];
          this.length++;
          return this;
        }
        else{
          currentNode = currentNode.next;
          i--;
        }
      }
      return null;
    }
    return null;
  }

  /*
   *  Delete element at the specified index(1-based)
   *  @param i, index(1-based)
   *  @return this LinkList after deletion
   */
  deleteElement(i){
    let currentNode = this.head;
    if(i <= this.length){
      while(i > 0 && currentNode.next){
        if(i == 1){
          currentNode.next = currentNode.next.next;
          this.length--;
          return this;
        }
        else{
          currentNode = currentNode.next;
          i--;
        }
      }
      return null;
    }
    return null;
  }
}

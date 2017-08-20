import SinglyLinkedList from './List_Singly_Linked';

export default class CircularSinglyLinkedList extends SinglyLinkedList {

  /*
   *  Constructor, generate the LinkedList instance by passing in an array of values and specifying a maxSize of the element list.
   */
  constructor(elements = []) {
    super(elements);
    this.findElement(this.length).next = this.head;
  }

  /*
   *  Empty the LinkedList
   *  @return this LinkedList after empty.
   */
  clearList(){
    this.head.next = this.head;
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
    while(i > 0 && currentNode.next !== this.head){
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
    while(currentNode.next !== this.head){
      i++;
      if(currentNode.next.data === x){
        return i;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  /*
   *  Insert element at the specified index(1-based), inherited from SinglyLinkedList
   *  @param x, value the element holds
   *  @param i, index(1-based)
   *  @return this LinkedList after insert
   */

  /*
   *  Delete element at the specified index(1-based), inherited from SinglyLinkedList
   *  @param i, index(1-based)
   *  @return this LinkedList after deletion
   */
}

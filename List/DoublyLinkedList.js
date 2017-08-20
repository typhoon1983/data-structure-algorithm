import LinkedList from './_LinkedList';
import MixinDoubly from './_MixinDoubly';
import MixinLinked from './_MixinLinked';

export default class DoublyLinkedList extends MixinLinked(MixinDoubly(LinkedList)) {

  /*
   *  Empty the LinkList
   *  @return this LinkList after empty.
   */

  /*
   *  Get element by specify index(1-based)
   *  @param i, index(1-based)
   *  @return value of the element on the specified index
   */

  /*
   *  Return element(first appearance) index(1-based) by specify a value
   *  @param x, the value target element holds
   *  @return the index(1-based) of the target element if exists, otherwise null
   */

  /*
   *  Insert element at the specified index(1-based)
   *  @param x, value the element holds
   *  @param i, index(1-based)
   *  @return this LinkList after insert
   */
  insertElement(x,i){
    if(i > 0 && i <= this.length + 1){
      let prevNode = this.findElement(i-1);
      let newNode = new DoublyLinkedNode(x);
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

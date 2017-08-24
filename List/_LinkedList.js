/**
 * Base Class of Linked List
 * consists of generic methods in different type of Linked List
 * Should be used in Class extension rather than directly as constructor
 * Static getter NodeType and tail are required in the final extended Class
 */

export default class LinkedList {

  constructor(elements = []) {
    if(new.target.name === 'LinkedList'){
      throw new TypeError('TypeError: LinkedList can not be used as constructor directly.')
    }
    this.NodeType = new.target.nodeType;
    this.head = new this.NodeType();
    // Class.tail is this.head or null
    this.tail = new.target.tail ? this[new.target.tail] : null;
    this.length = 0;
    // Link nodes together
    elements.reduce((priorNode,currentValue)=>{
      let node = new this.NodeType(currentValue);
      priorNode.setLink(node);
      this.length++;
      return node;
    },this.head).setLink(this.tail);
  }

  /**
   * Empty the list by reset length and pointer
   * @return the empty list.
   */
  clearList(){
    this.length = 0;
    this.head.setPointer(this.tail);
    return this;
  }

  /**
   * Get node on the specified index(1-based)
   * @param {Number} i, index(1-based)
   * @return {this.NodeType|null} the node on the specified index or throw a range error if index is out of range
   */
  getElement(i){
    let currentNode = this.head;
    while(i > 0 && currentNode.next !== this.tail){
      currentNode = currentNode.next;
      i--;
    }
    if(i === 0){
      return currentNode;
    }
    throw new RangeError('RangeError: Specified index is out of range');
  }

  /**
   * Get index(first occurrence, 1-based) of the node which has value matching the specified value
   * @param {Number|String|Null} x, value that target node holds
   * @return {Number} index of the target node if it exists, otherwise -1
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
    return -1;
  }

  /**
   * Insert node on the specified index(1-based)
   * @param {Number|String|Null} x, value the new node holds
   * @param {Number} i, index(1-based) which the new node will sit on
   * @return {LinkedList} current list or throw a range error if i is out of range
   */
  insertElement(x,i){
    if(i > 0 && i <= this.length + 1){
      let prevNode = this.getElement(i-1);
      let newNode = new this.NodeType(x);
      newNode.setLink(prevNode.next);
      prevNode.setLink(newNode);
      this.length++;
      return this;
    }
    throw new RangeError('RangeError: Specified index is out of range');
  }

  /**
   * Delete node on the specified index(1-based)
   * @param {Number} i, index(1-based)
   * @return {this.NodeType|null} deleted node if exists or null if index not valid
   */
  deleteElement(i){
    if(i > 0 && i <= this.length){
      let prevNode = this.getElement(i-1);
      let currentNode = this.getElement(i);
      prevNode.setLink(currentNode.next);
      this.length--;
      return currentNode;
    }
    return null;
  }
}

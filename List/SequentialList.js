import Node from '../Node/Node';

/**
 * Sequential List Class
 * consists of generic methods in different type of Linked List
 * Should be used in Class extension rather than directly as constructor
 * Static getter NodeType and tail are required in the final extended Class
 */

class SequentialList {

  /**
   * Constructor, create the SequentialList instance.
   * @param {Array} elements, array of value to be add into the list
   * @param {Number} maxSize, max number of nodes the list will be storing
   */
  constructor(elements = [], maxSize = 0) {
    this.maxSize = maxSize;
    this.elements = elements.slice(0,maxSize).map((currentValue, index)=>{
      return new Node(currentValue);
    });
  }

  /**
   * Getter, length of the SequentialList
   * @return number of nodes in the SequentialList.
   */
  get length(){
    return this.elements.length;
  }

  /**
   * Empty the list by reset elements array
   * @return the empty list.
   */
  clearList(){
    // this.elements is the only place referencing the array which will be ready for Garbage Collection after being replaced by a new empty array
    this.elements = [];
    return this;
  }

  /**
   * Get node on the specified index(1-based)
   * @param {Number} i, index(1-based)
   * @return {this.NodeType|null} the node on the specified index or throw a range error if index is out of range
   */
  getElement(i){
    i--;
    if(i >= 0 && i < this.elements.length){
      return this.elements[i];
    }
    throw new RangeError('RangeError: Specified index is out of range');
  }

  /**
   * Get index(first occurrence, 1-based) of the node which has value matching the specified value
   * @param {Number|String|Null} x, value that target node holds
   * @return {Number} index of the target node if it exists, otherwise -1
   */
  getElementIndex(x){
    let index = this.elements.findIndex((node)=>{
      return node.data === x;
    })
    // return -1 if index == -1, otherwise return index + 1(1-based)
    return ++index ? index : -1;
  }

  /**
   * Insert node on the specified index(1-based)
   * @param {Number|String|Null} x, value the new node holds
   * @param {Number} i, index(1-based) which the new node will sit on
   * @return {SequentialList} current list or throw a range error if i is out of range
   */
  insertElement(x,i){
    i--;
    if(this.elements.length === this.maxSize){
      throw new RangeError('RangeError: List is full');
    }
    if(i < 0 || i > this.elements.length){
      throw new RangeError('RangeError: Specified index is out of range');
    }
    this.elements.splice(i,0,new Node(x));
    return this;
  }

  /**
   * Delete node on the specified index(1-based)
   * @param {Number} i, index(1-based)
   * @return {Node|null} deleted node if exists or null if index not valid
   */
  deleteElement(i){
    i--;
    if(i < 0 || i > this.elements.length - 1){
      return null;
    }
    return this.elements.splice(i,1)[0];
  }
}

export default SequentialList;

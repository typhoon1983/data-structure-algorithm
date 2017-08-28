import Node from '../Node/Node';

/**
 * Sequential Stack Class
 */

class SequentialStack {

  /**
   * Constructor, create the SequentialStack instance.
   * @param {Array} elements, array of value to be add into the stack(LIFO)
   * @param {Number} maxSize, max number of nodes the stack will be storing
   */
  constructor(elements = [], maxSize = 0) {
    this.maxSize = maxSize;
    this.elements = elements.slice(0,maxSize).map((currentValue, index)=>{
      return new Node(currentValue);
    });
    this.top = this.elements.length;
  }

  /**
   * Insert element into stack
   * @param {Number|String|Null} x, new value to be insert into the stack
   * @return {SequentialStack} current LinkedStack instance
   */
  push(x){
    if(this.top === this.maxSize){
      throw new RangeError('Stack is full.')
    }
    this.elements.push(new Node(x));
    this.top++;
    return this;
  }

  /**
   * Pop the top node out of stack
   * @return {SinglyLinkedNode} top node in the stack or null if stack is empty
   */
  pop(){
    if(this.top === 0){
      return null;
    }
    this.top--;
    return this.elements[this.top];
  }

  /**
   * Check if stack is empty
   * @return {Boolean} True if stack is empty, false if not
   */
  isEmpty(){
    return this.top === 0;
  }

  /**
   * Get the top node in the stack, without removing it from the stack
   * @return {SinglyLinkedNode} top node in the stack or null if stack is empty
   */
  get topElem(){
    return this.top === 0 ? null : this.elements[this.top - 1];
  }
}

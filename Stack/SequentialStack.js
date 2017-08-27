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

  push(x){
    if(this.top === this.maxSize){
      throw new RangeError('Stack is full.')
    }
    this.elements.push(new Node(x));
    this.top++;
    return this;
  }

  pop(){
    if(this.top === 0){
      return null;
    }
    this.top--;
    return this.elements[this.top];
  }

  isEmpty(){
    return !this.top;
  }

  get topElem(){
    return this.top === 0 ? null : this.elements[this.top - 1];
  }
}

import Node from '../Node/Node';

/**
 * Sequential Queue Class
 * Not an optimised solution, possible to have false overflow
 */

export default class SequentialQueue {

  /**
   * Constructor, create the SequentialQueue instance.
   * @param {Array} elements, array of value to be add into the queue(FIFO)
   * @param {Number} maxSize, max number of nodes the queue will be storing
   */
  constructor(elements = [], maxSize = 0) {
    this.maxSize = maxSize;
    this.elements = elements.slice(0,maxSize).map((currentValue, index)=>{
      return new Node(currentValue);
    });
    this.front = 0;
    this.rear = this.elements.length;
  }

  /**
   * Static method, get the next index pointer is moving to
   * @param {Number} index, current index pointer is at
   */
  static getNextIndex(index, maxSize) {
    if(index >= 0){
      return ++index;
    }
    throw new RangeError('Out of Range, index is not valid');
  }

  /**
   * Insert element into queue
   * @param {Number|String|Null} x, new value to be insert into the queue
   * @return {SequentialQueue} current Linkedqueue instance
   */
  enQueue(x){
    if(this.isFull()){
      throw new RangeError('queue is full')
    }
    this.elements.[this.rear] = new Node(x);
    this.rear = new.target.getNextIndex(this.rear, this.maxSize);
    return this;
  }

  /**
   * Pop the front node out of queue
   * @return {Node} top node in the queue or null if queue is empty
   */
  deQueue(){
    if(this.isEmpty()){
      return null;
    }
    let frontNode = this.elements[this.front];
    this.front = new.target.getNextIndex(this.front, this.maxSize);
    return frontNode;
  }

  /**
   * Check if queue is empty
   * @return {Boolean} True if queue is empty, false if not
   */
  isEmpty(){
    return this.front === this.rear;
  }

  /**
   * Check if queue is full, may have false overflow
   * @return {Boolean} True if queue is full, false if not
   */
  isFull(){
    return this.rear === this.maxSize;
  }

  /**
   * Getter, return the front node in the queue, without removing it from the queue
   * @return {Node} top node in the queue or null if queue is empty
   */
  get topElem(){
    return this.isEmpty() ? null : this.elements[this.front];
  }
}

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
   * Private function, Get the next index pointer is moving to
   * @param {Number} index, current index pointer is at
   */
  _getNextIndex(index, maxSize) {
    return ++index;
  }

  /**
   * Insert element into queue
   * @param {Number|String|Null} x, new value to be insert into the queue
   * @return {SequentialQueue} current Linkedqueue instance
   */
  enQueue(x){
    if(this.isFull()){
      throw new RangeError('Queue is full')
    }
    this.elements[this.rear] = new Node(x);
    this.rear = this._getNextIndex(this.rear, this.maxSize);
    return this;
  }

  /**
   * Pop the front node out of queue
   * @return {Node} front node in the queue or null if queue is empty
   */
  deQueue(){
    if(this.isEmpty()){
      return null;
    }
    let frontNode = this.elements[this.front];
    this.front = this._getNextIndex(this.front, this.maxSize);
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
    return this.rear === this.maxSize && this.rear != 0;
  }

  /**
   * Getter, return the front node in the queue, without removing it from the queue
   * @return {Node} front node in the queue or null if queue is empty
   */
  get frontElem(){
    return this.isEmpty() ? null : this.elements[this.front];
  }
}

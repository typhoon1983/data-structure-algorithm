import Node from '../Node/Node';

/**
 * Sequential Queue Class
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
   * Insert element into queue
   * @param {Number|String|Null} x, new value to be insert into the queue
   * @return {SequentialQueue} current Linkedqueue instance
   */
  enQueue(x){
    if(this.rear === this.maxSize){
      throw new RangeError('queue is full')
    }
    this.elements.push(new Node(x));
    this.rear++;
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
    return this.elements[this.front++];
  }

  /**
   * Check if queue is empty
   * @return {Boolean} True if queue is empty, false if not
   */
  isEmpty(){
    return this.front === this.rear;
  }

  /**
   * Getter, return the front node in the queue, without removing it from the queue
   * @return {Node} top node in the queue or null if queue is empty
   */
  get topElem(){
    return this.isEmpty() ? null : this.elements[this.front];
  }
}

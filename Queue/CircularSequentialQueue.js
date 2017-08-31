import Node from '../Node/Node';
import SequentialQueue from './SequentialQueue';

/**
 * Circular Sequential Queue Class
 */

export default class CircularSequentialQueue extends SequentialQueue {

  /**
   * Constructor, create the CircularSequentialQueue instance, inherit from Class SequentialQueue
   * @param {Array} elements, array of value to be add into the queue(FIFO)
   * @param {Number} maxSize, max number of nodes the queue will be storing
   */

  /**
   * Static method, get the next index pointer is moving to
   * @param {Number} index, current index pointer is at
   */
  static getNextIndex(index, maxSize) {
    if(index >= 0){
      return (index + 1) % maxSize
    }
    throw new RangeError('Out of Range, index is not valid');
  }

  /**
   * Insert element into queue, inherit from Class SequentialQueue
   * @param {Number|String|Null} x, new value to be insert into the queue
   * @return {CircularSequentialQueue} current Linkedqueue instance
   */

  /**
   * Pop the front node out of queue
   * @return {Node} top node in the queue or null if queue is empty
   */

  /**
   * Check if queue is empty, inherit from Class SequentialQueue
   * @return {Boolean} True if queue is empty, false if not
   */

  /**
   * Check if queue is full
   * @return {Boolean} True if queue is full, false if not
   */
  isFull(){
    return (this.rear + 1) % this.maxSize === this.front;
  }

  /**
   * Getter, return the front node in the queue, without removing it from the queue, inherit from Class SequentialQueue
   * @return {Node} top node in the queue or null if queue is empty
   */
}

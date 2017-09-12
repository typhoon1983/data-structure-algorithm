import SinglyLinkedNode from '../Node/SinglyLinkedNode';

/**
 * Linked Queue Class
 */

export default class LinkedQueue {

  /**
   * Constructor, create the LinkedQueue instance.
   * @param {Array} elements, array of value to be added into the queue(FIFO)
   */
  constructor(elements = []) {
    this.front = new SinglyLinkedNode();
    this.rear = this.front;
    this.length = 0;
    // Link nodes together
    elements.forEach((element)=>{
      this.enQueue(element);
    })
  }

  /**
   * Insert element into queue
   * @param {Number|String|Null} x, new value to be insert into the queue
   * @return {LinkedQueue} current LinkedQueue instance
   */
  enQueue(x){
    let newNode = new SinglyLinkedNode(x);
    this.rear.setLink(newNode);
    this.rear = newNode;
    this.length++;
    return this;
  }

  /**
   * Pop the front node out of queue
   * @return {SinglyLinkedNode} front node in the queue or null if queue is empty
   */
  deQueue(){
    if(this.isEmpty()){
      return null;
    }
    let frontNode = this.front.next;
    this.front.next = frontNode.next;
    this.length--;
    if(this.rear === frontNode){
      this.rear = this.front;
    }
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
   * Getter, return the front node in the queue, without removing it from the queue
   * @return {Node} front node in the queue or null if queue is empty
   */
  get frontElem(){
    return this.isEmpty() ? null : this.front.next;
  }
}

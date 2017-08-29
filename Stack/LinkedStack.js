import SinglyLinkedNode from '../Node/SinglyLinkedNode';

/**
 * Linked Stack Class
 */

export default class LinkedStack {

  /**
   * Constructor, create the LinkedStack instance.
   * @param {Array} elements, array of value to be added into the stack(LIFO)
   */
  constructor(elements = []) {
    this.top = new SinglyLinkedNode();
    this.length = 0;
    // Link nodes together
    elements.forEach((element)=>{
      this.push(element);
    })
  }

  /**
   * Insert element into stack
   * @param {Number|String|Null} x, new value to be insert into the stack
   * @return {LinkedStack} current LinkedStack instance
   */
  push(x){
    let newNode = new SinglyLinkedNode(x);
    this.top.setLink(newNode.setLink(this.top.next));
    this.length++;
    return this;
  }

  /**
   * Pop the top node out of stack
   * @return {SinglyLinkedNode} top node in the stack or null if stack is empty
   */
  pop(){
    if(this.isEmpty()){
      return null;
    }
    let popNode = this.top.next;
    this.top.next = popNode.next;
    this.length--;
    return popNode;
  }

  /**
   * Check if stack is empty
   * @return {Boolean} True if stack is empty, false if not
   */
  isEmpty(){
    return this.top.next === null;
  }

  /**
   * Getter, return the top node in the stack, without removing it from the stack
   * @return {SinglyLinkedNode} top node in the stack or null if stack is empty
   */
  get topElem(){
    return this.top.next;
  }
}

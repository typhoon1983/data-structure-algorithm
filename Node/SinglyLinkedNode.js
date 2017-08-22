import Node from './Node';

/**
 * Node is a represantation of data element,
 * Class SinglyLinkedNode extends the basic Class Node
 * by adding a next pointer pointing to the node logically after current node
 */

export default class SinglyLinkedNode extends Node {
  constructor(data) {
    super(data);
    this.next = null;
  }

  /**
   * Appending the specified node to current node
   * @param {SinglyLinkedNode} node target node which will be appended to current node
   * @return {SinglyLinkedNode} current node
   */
  setLink(node){
    let isSLN = node instanceof SinglyLinkedNode;
    if(isSLN || node === null){
      this.next = node;
      return this;
    }
    else{
      throw new TypeError('TypeError: node is not instance of SinglyLinkedNode');
    }
  }
}

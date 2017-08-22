import Node from './Node';

/**
 * Node is a represantation of data element,
 * Class DoublyLinkedNode extends the basic Class Node
 * by adding a prior pointer pointing to the node logically before current node
 * and a next pointer pointing to the node logically after current node
 */

export default class DoublyLinkedNode extends Node {
  constructor(data) {
    super(data);
    this.next = null;
    this.prior = null;
  }

  /**
   * Appending the specified node to current node
   * @param {DoublyLinkedNode} node target node which will be appended to current node
   * @returns {DoublyLinkedNode} current node
   */
  setLink(node){
    let isDLN = node instanceof DoublyLinkedNode;
    if(isDLN || node === null){
      this.next = node;
      if(node !== null){
        node.prior = this;
      }
      return this;
    }
    else{
      throw new TypeError('TypeError: node is not instance of DoublyLinkedNode');
    }
  }
}

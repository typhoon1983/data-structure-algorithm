import Node from './Node';

/**
 * Node is a represantation of data element,
 * Class SinglyLinkedNode extends the basic Class Node
 * by adding a next pointer pointing to the node logically after current node
 */

export default class SinglyLinkedNode extends Node {
  constructor(...args) {
    super(...args);
    this.next = null;
  }

  /**
   * Appending the specified node to current node
   * @param {SinglyLinkedNode|null} node target node which will be appended to current node
   * @returns {SinglyLinkedNode} current node
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

  /**
   * Set the pointer/s of current node to link to specified node or null
   * @param {SinglyLinkedNode|null} node target node which will be pointed to
   * @returns {SinglyLinkedNode} current node
   */
  setPointer(node){
    return this.setLink(node);
  }
}

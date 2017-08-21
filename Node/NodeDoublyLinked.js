import Node from './Node';

export default class DoublyLinkedNode extends Node {
  constructor(data = null) {
    super(data);
    this.next = null;
    this.prior = null;
  }
  setLink(node){
    this.next = node;
    if(node instanceof DoublyLinkedNode){
      node.prior = this;
    }
  }
}

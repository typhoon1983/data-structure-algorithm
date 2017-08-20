import Node from './Node';

export default class SinglyLinkedNode extends Node {
  constructor(data) {
    super(data);
    this.next = null;
  }
  setLink(node){
    this.next = node;
  }
}

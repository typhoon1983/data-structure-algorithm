import NodeDoublyLinked from '../Node/NodeDoublyLinked';

export default (Base) => class extends Base {
  /*
   *  Getter, node type used in ListSequential
   *  @return node class.
   */
  static get nodeType(){
    return NodeDoublyLinked;
  }

  clearList(){
    this.head.prior = this.head.next = this.tail;
    return super.clearList();
  }

}

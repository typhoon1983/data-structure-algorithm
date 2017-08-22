import SinglyLinkedNode from '../Node/SinglyLinkedNode';

export default (Base) => class extends Base {
  /*
   *  Getter, node type used in ListSequential
   *  @return node class.
   */
  static get nodeType(){
    return SinglyLinkedNode;
  }

  clearList(){
    this.head.next = this.tail;
    return super.clearList();
  }
}

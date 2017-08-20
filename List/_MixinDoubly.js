import NodeDoublyLinked from '../Node/NodeDoublyLinked';

export default (Base) => class extends Base {
  /*
   *  Getter, node type used in ListSequential
   *  @return node class.
   */
  static get nodeType(){
    return NodeDoublyLinked;
  }

  getPriorNode(node){
    return node.prior;
  }

  getNextNode(node){
    return node.next;
  }
}

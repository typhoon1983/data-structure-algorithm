import NodeSinglyLinked from '../Node/NodeSinglyLinked';

export default (Base) => class extends Base {
  /*
   *  Getter, node type used in ListSequential
   *  @return node class.
   */
  static get nodeType(){
    return NodeSinglyLinked;
  }
}
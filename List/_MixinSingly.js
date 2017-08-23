import SinglyLinkedNode from '../Node/SinglyLinkedNode';

/**
 * Singly Mixin, extends the Base Class with
 * 1. Getter nodeType,
 * 2. Augmented Function clearList.
 */

export default (Base) => class extends Base {

  /**
   * Getter, Default nodeType is set to be SinglyLinkedNode
   * @returns {Class} SinglyLinkedNode
   */
  static get nodeType(){
    return SinglyLinkedNode;
  }
}

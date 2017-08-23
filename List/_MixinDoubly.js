import DoublyLinkedNode from '../Node/DoublyLinkedNode';

/**
 * Doubly Mixin, extends the Base Class with
 * 1. Getter nodeType,
 * 2. Augmented Function clearList.
 */

export default (Base) => class extends Base {

  /**
   * Getter, Default nodeType is set to be DoublyLinkedNode
   * @returns {Class} DoublyLinkedNode
   */
  static get nodeType(){
    return DoublyLinkedNode;
  }
}

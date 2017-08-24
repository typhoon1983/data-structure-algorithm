import DoublyLinkedNode from '../Node/DoublyLinkedNode';

/**
 * Doubly Mixin, extends the Base Class with
 * - Getter nodeType,
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

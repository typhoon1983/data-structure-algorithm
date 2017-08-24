import SinglyLinkedNode from '../Node/SinglyLinkedNode';

/**
 * Singly Mixin, extends the Base Class with
 * - Getter nodeType,
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

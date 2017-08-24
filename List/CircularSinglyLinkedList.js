import LinkedList from './_LinkedList';
import MixinSingly from './_MixinSingly';
import MixinCircular from './_MixinCircular';

export default class CircularSinglyLinkedList extends MixinCircular(MixinSingly(LinkedList)) {

  /**
   * Empty the list by reset length and pointer
   * @return the empty list.
   * @example circularSinglyLinkedList.clearList()
   */

  /**
   * Get node on the specified index(1-based)
   * @param {Number} i, index(1-based)
   * @return {SinglyLinkedNode|null} the node on the specified index or throw a range error if index is out of range
   * @example circularSinglyLinkedList.getElement(1)
   */

  /**
   * Get index(first occurrence, 1-based) of the node which has value matching the specified value
   * @param {Number|String|Null} x, value that target node holds
   * @return {Number} index of the target node if it exists, otherwise -1
   * @example circularSinglyLinkedList.getElementIndex('1')
   */

  /**
   * Insert node on the specified index(1-based)
   * @param {Number|String|Null} x, value the new node holds
   * @param {Number} i, index(1-based) which the new node will sit on
   * @return {CircularSinglyLinkedList} current list or throw a range error if i is out of range
   * @example circularSinglyLinkedList.insertElement('2',2)
   */

  /**
   * Delete node on the specified index(1-based)
   * @param {Number} i, index(1-based)
   * @return {SinglyLinkedNode|null} deleted node if exists or null if index not valid
   * @example circularSinglyLinkedList.deleteElement(2)
   */
}

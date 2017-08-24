import LinkedList from './_LinkedList';
import MixinDoubly from './_MixinDoubly';
import MixinCircular from './_MixinCircular';

export default class CircularDoublyLinkedList extends MixinCircular(MixinDoubly(LinkedList)) {

  /**
   * Empty the list by reset length and pointer
   * @return the empty list.
   * @example circularDoublyLinkedList.clearList()
   */

  /**
   * Get node on the specified index(1-based)
   * @param {Number} i, index(1-based)
   * @return {DoublyLinkedNode|null} the node on the specified index or throw a range error if index is out of range
   * @example circularDoublyLinkedList.getElement(1)
   */

  /**
   * Get index(first occurrence, 1-based) of the node which has value matching the specified value
   * @param {Number|String|Null} x, value that target node holds
   * @return {Number} index of the target node if it exists, otherwise -1
   * @example circularDoublyLinkedList.getElementIndex('1')
   */

  /**
   * Insert node on the specified index(1-based)
   * @param {Number|String|Null} x, value the new node holds
   * @param {Number} i, index(1-based) which the new node will sit on
   * @return {CircularDoublyLinkedList} current list or throw a range error if i is out of range
   * @example circularDoublyLinkedList.insertElement('2',2)
   */

  /**
   * Delete node on the specified index(1-based)
   * @param {Number} i, index(1-based)
   * @return {DoublyLinkedNode|null} deleted node if exists or null if index not valid
   * @example circularDoublyLinkedList.deleteElement(2)
   */
}

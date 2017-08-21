import LinkedList from './_LinkedList';
import MixinDoubly from './_MixinDoubly';
import MixinCircular from './_MixinCircular';

export default class CircularDoublyLinkedList extends MixinCircular(MixinDoubly(LinkedList)) {

  /*
   *  Empty the LinkedList
   *  @return this LinkedList after empty.
   */

  /*
   *  Find element by specify index(1-based)
   *  @param i, index(1-based)
   *  @return value of the element on the specified index
   */

  /*
   *  Return element(first appearance) index(1-based) by specify a value
   *  @param x, the value target element holds
   *  @return the index(1-based) of the target element if exists, otherwise null
   */

  /*
   *  Insert element at the specified index(1-based), inherited from SinglyLinkedList
   *  @param x, value the element holds
   *  @param i, index(1-based)
   *  @return this LinkedList after insert
   */

  /*
   *  Delete element at the specified index(1-based), inherited from SinglyLinkedList
   *  @param i, index(1-based)
   *  @return this LinkedList after deletion
   */
}

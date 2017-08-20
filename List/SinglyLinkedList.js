import LinkedList from './_LinkedList';
import MixinSingly from './_MixinSingly';
import MixinLinked from './_MixinLinked';

export default class SinglyLinkedList extends MixinLinked(MixinSingly(LinkedList)) {

  /*
   *  Empty the LinkList, inherited from Linked
   *  @return this LinkList after empty.
   */

  /*
   *  getElement by specify index(1-based), inherited from Linked
   *  @param i, index(1-based)
   *  @return the element on the specified index
   */

  /*
   *  Return element(first appearance) index(1-based) by specify a value
   *  @param x, the value target element holds
   *  @return the index(1-based) of the target element if exists, otherwise null
   */

  /*
   *  Insert element at the specified index(1-based)
   *  @param x, value the element holds
   *  @param i, index(1-based)
   *  @return this LinkList after insert
   */

  /*
   *  Delete element at the specified index(1-based)
   *  @param i, index(1-based)
   *  @return this LinkList after deletion
   */
}

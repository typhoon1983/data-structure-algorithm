/**
 * Linked Mixin, extends the Base Class constructor with Linked list characteristics.
 */

export default (Base) => class extends Base {

  /**
   * Getter, tail is the ending element which the last node links to.
   * Default tail element is set to be null
   * @returns {Null} null
   */
  static get tail(){
    return null;
  }
};

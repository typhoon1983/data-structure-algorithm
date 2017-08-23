/**
 * Circular Mixin, extends the Base Class constructor with Circular Linked list characteristics.
 */

export default (Base) => class extends Base {

  /**
   * Getter, tail is the ending element which the last node links to.
   * Default tail element is set to be head(Circular Linked)
   * @returns {String} 'head'
   */
  static get tail(){
    return 'head';
  }
};

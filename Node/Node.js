/**
 * Node is a represantation of data element,
 * Class Node is the most basic type of node with only one property for storing data value
 * @param {Number|String|Null} [data] data value stored in the node
 */
export default class Node {
  constructor(data = null) {
    this.data = data;
  }
}

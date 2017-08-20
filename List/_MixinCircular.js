export default (Base) => class extends Base {

  constructor(elements) {
    super(elements);
    this.tail = this.head;
    this.getElement(this.length).next = this.tail;
  }
};
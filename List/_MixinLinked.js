export default (Base) => class extends Base {

  constructor(elements) {
    super(elements);
    this.tail = null;
  }
};

class SeqList {

  /*
   *  Constructor, generate the SeqList instance by passing in an array of values and specifying a maxSize of the element list.
   */
  constructor(elements = [], maxSize = 0) {
    this.maxSize = maxSize;
    this.elements = elements.slice(0,maxSize);
  }

  /*
   *  Empty the SeqList
   *  @return this SeqList after empty.
   */
  clearList(){
    // this.elements is the only place referencing the original array which will be Garbage Collected after being replaced by a new empty array
    this.elements = [];
    return this;
  }

  /*
   *  Getter, elements length of the SeqList
   *  @return length of the element list.
   */
  get length(){
    return this.elements.length;
  }

  /*
   *  Get element by specify index(1-based)
   *  @param i, index(1-based)
   *  @return value of the element on the specified index
   */
  getElement(i){
    i--;
    return i >= 0 && i < this.elements.length ? this.elements[i] : null;
  }

  /*
   *  Return element(first appearance) index(1-based) by specify a value
   *  @param x, the value target element holds
   *  @return the index(1-based) of the target element if exists, otherwise null
   */
  findElement(x){
    let index = this.elements.indexOf(x);
    return ++index > 0 ? index : null;
  }

  /*
   *  Return element before the specified index(1-based)
   *  @param i, index(1-based)
   *  @return value of the element which sits before the passed in index in the SeqList, if exists.
   *          otherwise null.
   */
  getPrevElement(i){
    i--;
    return i > 0 && i < this.elements.length ? this.elements[i-1] : null;
  }

  /*
   *  Return element after the specified index(1-based)
   *  @param i, index(1-based)
   *  @return value of the element which sits after the passed in index in the SeqList, if exists.
   *          otherwise null.
   */
  getNextElement(i){
    i--;
    return i >= 0 && i < this.elements.length - 1 ? this.elements[i+1] : null;
  }

  /*
   *  Insert element at the specified index(1-based)
   *  @param x, value the element holds
   *  @param i, index(1-based)
   *  @return this SeqList after insert
   */
  insertElement(x,i){
    i--;
    if(i < 0 || i > this.elements.length || this.elements.length === this.maxSize){
      return null;
    }
    this.elements.splice(i,0,x);
    return this;
  }

  /*
   *  Delete element at the specified index(1-based)
   *  @param i, index(1-based)
   *  @return this SeqList after deletion
   */
  deleteElement(i){
    i--;
    if(i < 0 || i > this.elements.length - 1){
      return null;
    }
    this.elements.splice(i,1);
    return this;
  }
}

export default SeqList;

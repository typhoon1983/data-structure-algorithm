class SeqList {

  /*
   *  Constructor, generate the SeqList from the arguments passed in
   */
  constructor(elements = [], maxSize = 0) {
    this.maxSize = maxSize;
    this.elements = elements.slice(0,maxSize);
  }

  /*
   *  Empty the SeqList
   */
  clearList(){
    // this.elements is the only place referencing the original array which will be Garbage Collected after being replaced by a new empty array
    this.elements = [];
    return this;
  }

  /*
   *  Getter, elements length of the SeqList
   */
  get length(){
    return this.elements.length;
  }

  /*
   *  Get element by specify index(1-based)
   */
  getElement(i){
    i--;
    return i >= 0 && i < this.elements.length ? this.elements[i] : null;
  }

  /*
   *  Return element(first appearance) index(1-based) by specify a value
   */
  findElement(x){
    let index = this.elements.indexOf(x);
    return ++index > 0 ? index : null;
  }

  /*
   *  Return element before the specified index(1-based)
   */
  getPrevElement(i){
    i--;
    return i > 0 && i < this.elements.length ? this.elements[i-1] : null;
  }

  /*
   *  Return element after the specified index(1-based)
   */
  getNextElement(i){
    i--;
    return i >= 0 && i < this.elements.length - 1 ? this.elements[i+1] : null;
  }

  /*
   *  Insert element at the specified index(1-based)
   */
  insertElement(x,i){
    i--;
    if(i < 0 || i > this.elements.length || this.elements.length === this.maxSize){
      return null;
    }
    this.elements.splice(i,0,x);
    return this.elements;
  }

  /*
   *  Delete element at the specified index(1-based)
   */
  deleteElement(i){
    i--;
    if(i < 0 || i > this.elements.length - 1){
      return null;
    }
    this.elements.splice(i,1);
    return this.elements;
  }
}

export default SeqList;

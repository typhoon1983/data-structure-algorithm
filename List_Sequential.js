class SeqList {
  constructor(elements, maxSize) {
    this.maxSize = maxSize;
    this.elements = elements.slice(0,maxSize);
  }

  clearList(){
    // this.elements is the only place referencing the original array which will be Garbage Collected after being replaced by a new empty array
    this.elements = [];
  }

  get length(){
    return this.elements.length;
  }

  getElement(i){
    i--;
    return i >= 0 && i < this.elements.length ? this.elements[i] : null;
  }

  findElement(x){
    let index = this.elements.indexOf(x);
    return index > -1 ? index : null;
  }

  get priorElement(i){
    i--;
    return i > 0 ? this.elements[i-1] : null;
  }

  get nextElement(i){
    i--;
    return i < this.elements.length - 1 ? this.elements[i+1] : null;
  }

  insertElement(x,i){
    i--;
    if(i < 0 || i > this.elements.length || this.elements.length === this.maxSize){
      return null;
    }
    this.elements.splice(i,0,x);
    return this.elements;
  }

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

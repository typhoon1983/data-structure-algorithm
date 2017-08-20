import Node from '../Node/Node';

class ListSequential {

  /*
   *  Constructor, generate the ListSequential instance by passing in an array of values and specifying a maxSize of the element list.
   */
  constructor(elements = [], maxSize = 0) {
    this.maxSize = maxSize;
    this.elements = elements.slice(0,maxSize).map((currentValue, index)=>{
      return new Node(currentValue);
    });
  }

  /*
   *  Getter, elements length of the ListSequential
   *  @return length of the element list.
   */
  get length(){
    return this.elements.length;
  }

  /*
   *  Empty the ListSequential
   *  @return this ListSequential after empty.
   */
  clearList(){
    // this.elements is the only place referencing the original array which will be Garbage Collected after being replaced by a new empty array
    this.elements = [];
    return this;
  }

  /*
   *  Get element by specify index(1-based)
   *  @param i, index(1-based)
   *  @return the element on the specified index
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
  getElementIndex(x){
    let index = this.elements.findIndex((node)=>{
      return node.data === x;
    })
    return ~index ? index + 1 : null;
  }

  /*
   *  Insert element at the specified index(1-based)
   *  @param x, value the element holds
   *  @param i, index(1-based)
   *  @return this ListSequential after insert
   */
  insertElement(x,i){
    i--;
    if(i < 0 || i > this.elements.length || this.elements.length === this.maxSize){
      return null;
    }
    this.elements.splice(i,0,new Node(x));
    return this;
  }

  /*
   *  Delete element at the specified index(1-based)
   *  @param i, index(1-based)
   *  @return this ListSequential after deletion
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

export default ListSequential;

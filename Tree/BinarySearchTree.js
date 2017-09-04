// less-root-bigger, worset case sorted likst.

export default class BST{
  constructor(value=null, left=null, right=null){
    this.root = value === null ? null : this;
    this.value = value;
    this.left = left;
    this.right = right;
  }

  add(value){
    if(!this.root){
      this.value = value;
      this.root = this;
    }
    else if(value >= this.value){
      if(this.right){
        this.right.add(value);
      }
      else{
        this.right = new BST(value);
      }
    }
    else{
      if(this.left){
        this.left.add(value);
      }
      else{
        this.left = new BST(value);
      }
    }
    return this;
  }
}

import LinkedStack from '../Stack/LinkedStack'

//Reverse List
let reverseList = (list) => {
  let stack = new LinkedStack();
  let length = list.length;
  for(let i = 1; i <= length; i++){
    stack.push(list.getElement(i).data);
  }
  list.clearList();
  for(let i = 1; i <= length; i++){
    list.insertElement(stack.pop().data,i);
  }
  return list;
}

//Postfix Expression Evaluation
let postfixExpressionEvaluation = () => {
  
}

export { reverseList }

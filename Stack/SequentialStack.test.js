import SequentialStack from './SequentialStack';

let array5 = [1,2,3,4,5];
let array11 = [1,2,3,4,5,6,7,8,9,10,11];

test('SequentialStack constructor', () => {
  let stackA = new SequentialStack(array5, 10);
  let stackB = new SequentialStack(array11, 10);
  let stackC = new SequentialStack(undefined, 10);
  let stackD = new SequentialStack(array5);
  expect(stackA.top).toBe(5);
  expect(stackB.top).toBe(10);
  expect(stackC.top).toBe(0);
  expect(stackD.top).toBe(0);
});

test('SequentialStack push', () => {
  let stackA = new SequentialStack(array5, 10);
  let stackB = new SequentialStack(array11, 10);
  let stackC = new SequentialStack(undefined, 10);
  let stackD = new SequentialStack(array5);

  expect(stackA.push(6).top).toBe(6);
  try{
    stackB.push(11)
  }
  catch(e){
    expect(e.message).toBe('Stack is full');
  }
  expect(stackC.push(1).top).toBe(1);
  try{
    stackD.push(1)
  }
  catch(e){
    expect(e.message).toBe('Stack is full');
  }
});

test('SequentialStack pop', () => {
  let stackA = new SequentialStack(array5, 10);
  let stackB = new SequentialStack(array11, 10);
  let stackC = new SequentialStack(undefined, 10);

  expect(stackA.pop().data).toBe(5);
  expect(stackA.top).toBe(4);
  expect(stackB.pop().data).toBe(10);
  expect(stackB.top).toBe(9);
  expect(stackC.pop()).toBe(null);
});

test('SequentialStack isEmpty', () => {
  let stackA = new SequentialStack(array5, 10);
  let stackC = new SequentialStack(undefined, 10);

  expect(stackA.isEmpty()).toBe(false);
  expect(stackC.push(1).isEmpty()).toBe(false);
  stackC.pop();
  expect(stackC.isEmpty()).toBe(true);
});


test('SequentialStack topElem', () => {
  let stackA = new SequentialStack(array5, 10);
  let stackB = new SequentialStack(array11, 10);
  let stackC = new SequentialStack(undefined, 10);

  expect(stackA.topElem.data).toBe(5);
  expect(stackA.top).toBe(5);
  expect(stackB.topElem.data).toBe(10);
  expect(stackB.top).toBe(10);
  expect(stackC.topElem).toBe(null);
});

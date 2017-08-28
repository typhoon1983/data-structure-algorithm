import LinkedStack from './LinkedStack';

let array5 = [1,2,3,4,5];

test('LinkedStack constructor', () => {
  let stackA = new LinkedStack(array5);
  let stackB = new LinkedStack();

  expect(stackA.top.data).toBe(null);
  expect(stackA.length).toBe(5);
  expect(stackA.top.next.data).toBe(5);
  expect(stackB.length).toBe(0);
  expect(stackB.top.next).toBe(null);
});

test('LinkedStack push', () => {
  let stackA = new LinkedStack(array5);
  let stackB = new LinkedStack();

  expect(stackA.push(6).length).toBe(6);
  expect(stackB.push(1).length).toBe(1);
  expect(stackB.top.next.data).toBe(1);
});

test('LinkedStack pop', () => {
  let stackA = new LinkedStack(array5);
  let stackB = new LinkedStack();

  expect(stackA.pop().data).toBe(5);
  expect(stackA.length).toBe(4);
  expect(stackB.pop()).toBe(null);
});

test('LinkedStack isEmpty', () => {
  let stackA = new LinkedStack(array5);
  let stackB = new LinkedStack();

  expect(stackA.isEmpty()).toBe(false);
  expect(stackB.push(1).isEmpty()).toBe(false);
  stackB.pop();
  expect(stackB.isEmpty()).toBe(true);
});


test('LinkedStack topElem', () => {
  let stackA = new LinkedStack(array5);
  let stackB = new LinkedStack();

  expect(stackA.topElem.data).toBe(5);
  expect(stackA.length).toBe(5);
  expect(stackB.topElem).toBe(null);
});

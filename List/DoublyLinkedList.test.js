import DoublyLinkedList from './DoublyLinkedList';

let array5 = [1,2,3,4,5];

test('DoublyLinkedList constructor', () => {
  let listA = new DoublyLinkedList(array5);
  let listB = new DoublyLinkedList();

  expect(listA.head.data).toBe(null);
  expect(listA.getElement(1).data).toBe(1);
  expect(listA.getElement(5).next).toBe(null);
  expect(listA.getElement(5).prior.data).toBe(4);
  expect(listB.length).toBe(0);
  expect(listB.head.next).toBe(null);
});

test('DoublyLinkedList get length', () => {
  let listA = new DoublyLinkedList(array5);
  let listB = new DoublyLinkedList();

  expect(listA.length).toBe(5);
  expect(listB.length).toBe(0);
});

test('DoublyLinkedList getElement', () => {
  let listA = new DoublyLinkedList(array5);

  try{
    listA.getElement(-1)
  }
  catch(e){
    expect(e.message).toBe('RangeError: Specified index is out of range');
  }
  expect(listA.getElement(0).data).toBe(null);
  expect(listA.getElement(1).data).toBe(1);
  expect(listA.getElement(5).data).toBe(5);
  try{
    listA.getElement(6)
  }
  catch(e){
    expect(e.message).toBe('RangeError: Specified index is out of range');
  }
});

test('DoublyLinkedList getElementIndex', () => {
  let listA = new DoublyLinkedList(array5);

  expect(listA.getElementIndex(0)).toBe(-1);
  expect(listA.getElementIndex(1)).toBe(1);
  expect(listA.getElementIndex(5)).toBe(5);
});

test('DoublyLinkedList insertElement', () => {
  let listA = new DoublyLinkedList(array5);

  try{
    listA.insertElement(-1,0)
  }
  catch(e){
    expect(e.message).toBe('RangeError: Specified index is out of range');
  }
  expect(listA.insertElement(0,1).head.next.data).toBe(0);
  expect(listA.getElement(2).data).toBe(1);
  expect(listA.getElement(2).prior.data).toBe(0);
  expect(listA.insertElement(6,7).getElement(7).data).toBe(6);
  expect(listA.getElement(7).next).toBe(null);
  try{
    listA.insertElement(8,9)
  }
  catch(e){
    expect(e.message).toBe('RangeError: Specified index is out of range');
  }
});

test('DoublyLinkedList deleteElement', () => {
  let listA = new DoublyLinkedList(array5);
  let listB = new DoublyLinkedList();

  expect(listA.deleteElement(0)).toBe(null);
  expect(listA.deleteElement(5).data).toBe(5);
  expect(listA.length).toBe(4);
  expect(listA.getElement(4).next).toBe(null);
  listA.deleteElement(2);
  expect(listA.getElement(2).prior.data).toBe(1);
  expect(listA.getElement(1).next.data).toBe(3);
  expect(listB.insertElement(1,1).deleteElement(1).data).toBe(1);
  expect(listB.head.next).toBe(null);
});

test('DoublyLinkedList clearList', () => {
  let listA = new DoublyLinkedList(array5);

  expect(listA.clearList().length).toBe(0);
  expect(listA.head.next).toBe(null);
  expect(listA.head.prior).toBe(null);
});

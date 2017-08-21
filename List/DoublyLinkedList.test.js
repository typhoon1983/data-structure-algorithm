import DoublyLinkedList from './DoublyLinkedList';

let array5 = [1,2,3,4,5];

let listA = new DoublyLinkedList(array5);
let listB = new DoublyLinkedList();

test('Link List constructor', () => {
  expect(listA.head.data).toBe(null);
  expect(listA.getElement(1).data).toBe(1);
  expect(listA.getElement(5).next).toBe(null);
  expect(listA.getElement(5).prior.data).toBe(4);
  expect(listB.length).toBe(0);
  expect(listB.head.next).toBe(null);
});

test('Link List get length', () => {
  expect(listA.length).toBe(5);
});

test('Link List getElement', () => {
  expect(listA.getElement(-1)).toBe(null);
  expect(listA.getElement(0).data).toBe(null);
  expect(listA.getElement(1).data).toBe(1);
  expect(listA.getElement(5).data).toBe(5);
  expect(listA.getElement(6)).toBe(null);
});

test('Link List getElementIndex', () => {
  expect(listA.getElementIndex(0)).toBe(null);
  expect(listA.getElementIndex(1)).toBe(1);
  expect(listA.getElementIndex(5)).toBe(5);
});

test('Link List insertElement', () => {
  expect(listA.insertElement(-1,0)).toBe(null);
  expect(listA.insertElement(0,1).head.next.data).toBe(0);
  expect(listA.getElement(2).data).toBe(1);
  expect(listA.getElement(2).prior.data).toBe(0);
  expect(listA.insertElement(6,7).getElement(7).data).toBe(6);
  expect(listA.getElement(7).next).toBe(null);
  expect(listA.insertElement(8,9)).toBe(null);
});

test('Link List deleteElement', () => {
  expect(listA.deleteElement(0)).toBe(null);
  expect(listA.deleteElement(1).getElement(1).data).toBe(1);
  expect(listA.length).toBe(6);
  expect(listA.deleteElement(6).getElement(6)).toBe(null);
  expect(listA.getElement(5).next).toBe(null);
  expect(listA.deleteElement(2).getElement(2).prior.data).toBe(1);
  expect(listA.deleteElement(6)).toBe(null);
  expect(listB.insertElement(1,1).deleteElement(1).head.next).toBe(null);
});

test('Sequential List clearList', () => {
  expect(listA.clearList().length).toBe(0);
  expect(listA.head.next).toBe(null);
  expect(listA.head.prior).toBe(null);
});

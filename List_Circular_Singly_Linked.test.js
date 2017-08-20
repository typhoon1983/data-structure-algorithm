import CircularSinglyLinkedList from './List_Circular_Singly_Linked';

let array5 = [1,2,3,4,5];

let listA = new CircularSinglyLinkedList(array5);
let listB = new CircularSinglyLinkedList();

test('Link List constructor', () => {
  expect(listA.head.data).toBe(null);
  expect(listA.findElement(1).data).toBe(1);
  expect(listA.findElement(5).next).toBe(listA.head);
  expect(listB.length).toBe(0);
  expect(listB.head.next).toBe(listB.head);
});

test('Link List get length', () => {
  expect(listA.length).toBe(5);
});

test('Link List findElement', () => {
  expect(listA.findElement(0).data).toBe(null);
  expect(listA.findElement(1).data).toBe(1);
  expect(listA.findElement(5).data).toBe(5);
  expect(listA.findElement(6).data).toBe(null);
});

test('Link List getElementIndex', () => {
  expect(listA.getElementIndex(0)).toBe(null);
  expect(listA.getElementIndex(1)).toBe(1);
  expect(listA.getElementIndex(5)).toBe(5);
});

test('Link List insertElement', () => {
  expect(listA.insertElement(-1,0)).toBe(null);
  expect(listA.insertElement(0,1).head.next.data).toBe(0);
  expect(listA.length).toBe(6);
  expect(listA.findElement(2).data).toBe(1);
  expect(listA.insertElement(6,7).findElement(7).data).toBe(6);
  expect(listA.findElement(7).next).toBe(listA.head);
  expect(listA.insertElement(8,9)).toBe(null);
});

test('Link List deleteElement', () => {
  expect(listA.deleteElement(0)).toBe(null);
  expect(listA.deleteElement(1).findElement(1).data).toBe(1);
  expect(listA.length).toBe(6);
  expect(listA.deleteElement(6).findElement(6)).toBe(listA.head);
  expect(listA.findElement(5).next).toBe(listA.head);
  expect(listA.deleteElement(6)).toBe(null);
  expect(listB.insertElement(1,1).deleteElement(1).head.next).toBe(listB.head);
});

test('Sequential List clearList', () => {
  expect(listA.clearList().length).toBe(0);
  expect(listA.head.next).toBe(listA.head);
});

import SinglyLinkedList, {SinglyLinkedListNode} from './List_Singly_Linked';

let array5 = [1,2,3,4,5];

let listA = new SinglyLinkedList(array5);
let listB = new SinglyLinkedList();

test('Link List constructor', () => {
  expect(listA.head.data).toBe(null);
  expect(listA.head.next.data).toBe(1);
  expect(listA.head.next.next.data).toBe(2);
  expect(listA.head.next.next.next.data).toBe(3);
  expect(listA.head.next.next.next.next.data).toBe(4);
  expect(listA.head.next.next.next.next.next.data).toBe(5);
  expect(listA.head.next.next.next.next.next.next).toBe(null);
  expect(listB.length).toBe(0);
  expect(listB.head.next).toBe(null);
});

test('Link List get length', () => {
  expect(listA.length).toBe(5);
});

test('Link List getElement', () => {
  expect(listA.getElement(0)).toBe(null);
  expect(listA.getElement(1)).toBe(1);
  expect(listA.getElement(5)).toBe(5);
  expect(listA.getElement(6)).toBe(null);
});

test('Link List findElement', () => {
  expect(listA.findElement(0)).toBe(null);
  expect(listA.findElement(1)).toBe(1);
  expect(listA.findElement(5)).toBe(5);
});

test('Link List insertElement', () => {
  expect(listA.insertElement(-1,0)).toBe(null);
  expect(listA.insertElement(0,1).head.next.data).toBe(0);
  expect(listA.head.next.next.data).toBe(1);
  expect(listA.insertElement(6,7).head.next.next.next.next.next.next.next.data).toEqual(6);
  expect(listA.insertElement(8,9)).toEqual(null);
});

test('Link List deleteElement', () => {
  expect(listA.deleteElement(0)).toBe(null);
  expect(listA.deleteElement(1).head.next.data).toBe(1);
  expect(listA.deleteElement(6).head.next.next.next.next.next.data).toBe(5);
  expect(listA.head.next.next.next.next.next.next).toBe(null);
  expect(listA.deleteElement(6)).toBe(null);
});

test('Sequential List clearList', () => {
  expect(listA.clearList().length).toBe(0);
  expect(listA.head.next).toBe(null);
});

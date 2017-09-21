import SinglyLinkedList from '../List/SinglyLinkedList';
import { reverseList } from './usage'

let array5 = [1,2,3,4,5];

test('List Reverse Utility', () => {
  let listA = new SinglyLinkedList(array5);
  expect(listA.head.data).toBe(null);
  expect(listA.getElement(1).data).toBe(1);
  expect(listA.getElement(2).data).toBe(2);
  expect(listA.getElement(3).data).toBe(3);
  expect(listA.getElement(4).data).toBe(4);
  expect(listA.getElement(5).data).toBe(5);
  expect(listA.getElement(5).next).toBe(null);
  reverseList(listA);
  expect(listA.head.data).toBe(null);
  expect(listA.getElement(1).data).toBe(5);
  expect(listA.getElement(2).data).toBe(4);
  expect(listA.getElement(3).data).toBe(3);
  expect(listA.getElement(4).data).toBe(2);
  expect(listA.getElement(5).data).toBe(1);
  expect(listA.getElement(5).next).toBe(null);

  listA.clearList();
  expect(listA.head.next).toBe(null);
  reverseList(listA);
  expect(listA.head.next).toBe(null);
});

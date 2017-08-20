import DoublyLinkedList from './List_Doubly_Linked';

let array5 = [1,2,3,4,5];

let listA = new DoublyLinkedList(array5);
let listB = new DoublyLinkedList();

// test('Link List constructor', () => {
//   expect(listA.head.data).toBe(null);
//   expect(listA.findElement(1).data).toBe(1);
//   expect(listA.findElement(5).prior.data).toBe(4);
//   expect(listA.findElement(5).next).toBe(null);
//   expect(listB.length).toBe(0);
//   expect(listB.head.next).toBe(null);
//   expect(listB.head.prior).toBe(null);
// });
//
// test('Link List get length', () => {
//   expect(listA.length).toBe(5);
// });
//
// test('Link List getElement', () => {
//   expect(listA.findElement(0).data).toBe(null);
//   expect(listA.findElement(1).data).toBe(1);
//   expect(listA.findElement(5).data).toBe(5);
//   expect(listA.findElement(6).data).toBe(null);
// });
//
// test('Link List getElementIndex', () => {
//   expect(listA.getElementIndex(0)).toBe(null);
//   expect(listA.getElementIndex(1)).toBe(1);
//   expect(listA.getElementIndex(5)).toBe(5);
// });
//
// test('Link List insertElement', () => {
//   expect(listA.insertElement(-1,0)).toBe(null);
//   expect(listA.insertElement(0,1).head.next.data).toBe(0);
//   expect(listA.findElement(2).data).toBe(1);
//   expect(listA.insertElement(6,7).findElement(7).data).toBe(6);
//   expect(listA.findElement(7).next).toBe(null);
//   expect(listA.insertElement(8,9)).toBe(null);
// });
//
// test('Link List deleteElement', () => {
//   expect(listA.deleteElement(0)).toBe(null);
//   expect(listA.deleteElement(1).findElement(1).data).toBe(1);
//   expect(listA.length).toBe(6);
//   expect(listA.deleteElement(6).findElement(6)).toBe(listA.head);
//   expect(listA.findElement(5).next).toBe(null);
//   expect(listA.deleteElement(6)).toBe(null);
//   expect(listB.insertElement(1,1).deleteElement(1).head.next).toBe(null);
// });
//
// test('Sequential List clearList', () => {
//   expect(listA.clearList().length).toBe(0);
//   expect(listA.head.next).toBe(null);
// });

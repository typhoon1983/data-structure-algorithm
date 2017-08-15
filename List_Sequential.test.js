import SeqList from './List_Sequential';

let array5 = [1,2,3,4,5];
let array11 = [1,2,3,4,5,6,7,8,9,10,11];

let listA = new SeqList(array11,10);
let listB = new SeqList(array5,10);
let listC = new SeqList(undefined,10);
let listD = new SeqList(array5,undefined);

test('Sequential List constructor', () => {
  expect(listA.elements).toEqual([1,2,3,4,5,6,7,8,9,10]);
  expect(listB.elements).toEqual([1,2,3,4,5]);
  expect(listC.elements).toEqual([]);
  expect(listD.elements).toEqual([]);
});

test('Sequential List get length', () => {
  expect(listA.length).toBe(10);
  expect(listB.length).toBe(5);
});

test('Sequential List getElement', () => {
  expect(listB.getElement(0)).toBe(null);
  expect(listB.getElement(1)).toBe(1);
  expect(listB.getElement(5)).toBe(5);
  expect(listB.getElement(6)).toBe(null);
});

test('Sequential List findElement', () => {
  expect(listB.findElement(0)).toBe(null);
  expect(listB.findElement(1)).toBe(1);
  expect(listB.findElement(5)).toBe(5);
  expect(listB.findElement(6)).toBe(null);
});

test('Sequential List getPrevElement', () => {
  expect(listB.getPrevElement(1)).toBe(null);
  expect(listB.getPrevElement(2)).toBe(1);
  expect(listB.getPrevElement(6)).toBe(null);
});

test('Sequential List getNextElement', () => {
  expect(listB.getNextElement(1)).toBe(2);
  expect(listB.getNextElement(5)).toBe(null);
  expect(listB.getNextElement(6)).toBe(null);
});

test('Sequential List insertElement', () => {
  expect(listA.insertElement(11,1)).toBe(null);
  expect(listB.insertElement(0,0)).toBe(null);
  expect(listB.insertElement(6,7)).toBe(null);
  expect(listB.insertElement(0,1)).toEqual([0,1,2,3,4,5]);
  expect(listB.insertElement(6,7)).toEqual([0,1,2,3,4,5,6]);
});

test('Sequential List deleteElement', () => {
  expect(listA.deleteElement(0)).toBe(null);
  expect(listA.deleteElement(1)).toEqual([2,3,4,5,6,7,8,9,10]);
  expect(listA.deleteElement(10)).toBe(null);
});

test('Sequential List clearList', () => {
  expect(listA.clearList().length).toBe(0);
  expect(listB.clearList().elements).toEqual([]);
});

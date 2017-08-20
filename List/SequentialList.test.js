import SequentialList from './SequentialList';

let array5 = [1,2,3,4,5];
let array11 = [1,2,3,4,5,6,7,8,9,10,11];

let listA = new SequentialList(array11,10);
let listB = new SequentialList(array5,10);
let listC = new SequentialList(undefined,10);
let listD = new SequentialList(array5,undefined);

test('Sequential List constructor', () => {
  expect(listA.elements).toEqual([{'data':1},{'data':2},{'data':3},{'data':4},{'data':5},{'data':6},{'data':7},{'data':8},{'data':9},{'data':10}]);
  expect(listB.elements).toEqual([{'data':1},{'data':2},{'data':3},{'data':4},{'data':5}]);
  expect(listC.elements).toEqual([]);
  expect(listD.elements).toEqual([]);
});

test('Sequential List get length', () => {
  expect(listA.length).toBe(10);
  expect(listB.length).toBe(5);
});

test('Sequential List getElement', () => {
  expect(listB.getElement(0)).toBe(null);
  expect(listB.getElement(1).data).toBe(1);
  expect(listB.getElement(5).data).toBe(5);
  expect(listB.getElement(6)).toBe(null);
});

test('Sequential List getElementIndex', () => {
  expect(listB.getElementIndex(0)).toBe(null);
  expect(listB.getElementIndex(1)).toBe(1);
  expect(listB.getElementIndex(5)).toBe(5);
  expect(listB.getElementIndex(6)).toBe(null);
});

test('Sequential List insertElement', () => {
  expect(listA.insertElement(11,1)).toBe(null);
  expect(listB.insertElement(0,0)).toBe(null);
  expect(listB.insertElement(6,7)).toBe(null);
  expect(listB.insertElement(0,1).elements).toEqual([{'data':0},{'data':1},{'data':2},{'data':3},{'data':4},{'data':5}]);
  expect(listB.insertElement(6,7).elements).toEqual([{'data':0},{'data':1},{'data':2},{'data':3},{'data':4},{'data':5},{'data':6}]);
});

test('Sequential List deleteElement', () => {
  expect(listA.deleteElement(0)).toBe(null);
  expect(listA.deleteElement(1).elements).toEqual([{'data':2},{'data':3},{'data':4},{'data':5},{'data':6},{'data':7},{'data':8},{'data':9},{'data':10}]);
  expect(listA.deleteElement(10)).toBe(null);
});

test('Sequential List clearList', () => {
  expect(listA.clearList().length).toBe(0);
  expect(listB.clearList().elements).toEqual([]);
});

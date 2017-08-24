import SequentialList from './SequentialList';

let array5 = [1,2,3,4,5];
let array11 = [1,2,3,4,5,6,7,8,9,10,11];

test('SequentialList constructor', () => {
  let listA = new SequentialList(array11,10);
  let listB = new SequentialList(array5,10);
  let listC = new SequentialList(undefined,10);
  let listD = new SequentialList(array5,undefined);

  expect(listA.elements).toEqual([{'data':1},{'data':2},{'data':3},{'data':4},{'data':5},{'data':6},{'data':7},{'data':8},{'data':9},{'data':10}]);
  expect(listB.elements).toEqual([{'data':1},{'data':2},{'data':3},{'data':4},{'data':5}]);
  expect(listC.elements).toEqual([]);
  expect(listD.elements).toEqual([]);
});

test('SequentialList get length', () => {
  let listA = new SequentialList(array11,10);
  let listC = new SequentialList(undefined,10);

  expect(listA.length).toBe(10);
  expect(listC.length).toBe(0);
});

test('SequentialList getElement', () => {
  let listB = new SequentialList(array5,10);

  try{
    listB.getElement(0)
  }
  catch(e){
    expect(e.message).toBe('RangeError: Specified index is out of range');
  }
  expect(listB.getElement(1).data).toBe(1);
  expect(listB.getElement(5).data).toBe(5);
  try{
    listB.getElement(6)
  }
  catch(e){
    expect(e.message).toBe('RangeError: Specified index is out of range');
  }
});

test('SequentialList getElementIndex', () => {
  let listB = new SequentialList(array5,10);

  expect(listB.getElementIndex(0)).toBe(-1);
  expect(listB.getElementIndex(1)).toBe(1);
  expect(listB.getElementIndex(5)).toBe(5);
  expect(listB.getElementIndex(6)).toBe(-1);
});

test('SequentialList insertElement', () => {
  let listB = new SequentialList(array5,7);

  try{
    listB.insertElement(0,0)
  }
  catch(e){
    expect(e.message).toBe('RangeError: Specified index is out of range');
  }

  try{
    listB.insertElement(7,7)
  }
  catch(e){
    expect(e.message).toBe('RangeError: Specified index is out of range');
  }

  expect(listB.insertElement(0,1).elements).toEqual([{'data':0},{'data':1},{'data':2},{'data':3},{'data':4},{'data':5}]);
  expect(listB.insertElement(6,7).elements).toEqual([{'data':0},{'data':1},{'data':2},{'data':3},{'data':4},{'data':5},{'data':6}]);

  try{
    listB.insertElement(7,8)
  }
  catch(e){
    expect(e.message).toBe('RangeError: List is full');
  }
});

test('SequentialList deleteElement', () => {
  let listB = new SequentialList(array5,10);

  expect(listB.deleteElement(0)).toBe(null);
  expect(listB.deleteElement(1).data).toBe(1);
  expect(listB.length).toBe(4);
  expect(listB.deleteElement(5)).toBe(null);
});

test('SequentialList clearList', () => {
  let listA = new SequentialList(array11,10);

  expect(listA.clearList().length).toBe(0);
  expect(listA.elements).toEqual([]);
});

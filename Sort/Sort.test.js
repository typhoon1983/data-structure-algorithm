import bubbleSort from './bubbleSort'
import insertionSort from './insertionSort'
import mergeSort from './mergeSort'
import medianValue from './medianValue'
import quickSort from './quickSort'

test('bubbleSort', () => {
  let originalArray = [5,7,6,4];
  expect(bubbleSort(originalArray)).toEqual([4,5,6,7]);
});

test('insertionSort', () => {
  let originalArray = [5,7,6,4];
  expect(insertionSort(originalArray)).toEqual([4,5,6,7]);
});

test('mergeSort', () => {
  let originalArray = [5,7,6,4];
  expect(mergeSort(originalArray)).toEqual([4,5,6,7]);
});

test('medianValue', () => {
  let originalArrayA = [1,5,8,9];
  let originalArrayB = [2,3,7,10];
  expect(medianValue(originalArrayA, originalArrayB)).toBe(7);
  expect(medianValue(originalArrayB, originalArrayA)).toBe(7);
  let originalArrayC = [1];
  let originalArrayD = [2,3,7,10];
  expect(medianValue(originalArrayC, originalArrayD)).toBe(3);
  expect(medianValue(originalArrayD, originalArrayC)).toBe(3);
});

test('quickSort', () => {
  let originalArray = [5,7,6,4];
  expect(quickSort(originalArray)).toEqual([4,5,6,7]);
});

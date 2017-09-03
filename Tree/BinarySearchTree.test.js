import BinarySearchTree from './BinarySearchTree'

const elements = [3,7,4,6,5,1,10,2,9,8];

test('BinarySearchTree constructor', () => {
  let bstA = new BinarySearchTree();
  expect(bstA.value).toBe(null);
  expect(bstA.left).toBe(null);
  expect(bstA.right).toBe(null);
});

test('BinarySearchTree add', () => {
  let bstA = new BinarySearchTree();
  expect(bstA.add(3).root.value).toBe(3);
  expect(bstA.add(4).root.right.value).toBe(4);
  expect(bstA.add(2).root.left.value).toBe(2);
  expect(bstA.add(5).root.right.right.value).toBe(5);
  expect(bstA.add(1).root.left.left.value).toBe(1);
});

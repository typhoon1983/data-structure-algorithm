import Node from './Node';
import SinglyLinkedNode from './SinglyLinkedNode';
import DoublyLinkedNode from './DoublyLinkedNode';

let NodeNull = new Node();
let NodeSinglyA = new SinglyLinkedNode(1);
let NodeSinglyB = new SinglyLinkedNode(2);
let NodeDoublyA = new DoublyLinkedNode(1);
let NodeDoublyB = new DoublyLinkedNode(2);

test('Node constructor', () => {
  expect(NodeNull.data).toBe(null);
  expect(NodeSinglyA.data).toBe(1);
  expect(NodeSinglyA.next).toBe(null);
  expect(NodeDoublyA.data).toBe(1);
  expect(NodeDoublyA.prior).toBe(null);
  expect(NodeDoublyA.next).toBe(null);
});

test('SinglyLinkedNode linking', () => {
  try{
    NodeSinglyA.setLink(1);
  }
  catch(e){
    expect(e.message).toBe('TypeError: node is not instance of SinglyLinkedNode');
  }
  expect(NodeSinglyA.setLink(NodeSinglyB).next.data).toBe(2);

  expect(NodeSinglyA.setLink(null).next).toBe(null);
});

test('DoublyLinkedNode linking', () => {
  try{
    NodeDoublyA.setLink(1);
  }
  catch(e){
    expect(e.message).toBe('TypeError: node is not instance of DoublyLinkedNode');
  }
  expect(NodeDoublyA.setLink(NodeDoublyB).next.data).toBe(2);
  expect(NodeDoublyB.prior.data).toBe(1);

  expect(NodeDoublyA.setLink(null).next).toBe(null);
});

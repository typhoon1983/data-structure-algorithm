import SequentialQueue from './SequentialQueue';

let array5 = [1,2,3,4,5];
let array11 = [1,2,3,4,5,6,7,8,9,10,11];

test('SequentialQueue constructor', () => {
  let queueA = new SequentialQueue(array5, 10);
  let queueB = new SequentialQueue(array11, 10);
  let queueC = new SequentialQueue(undefined, 10);
  let queueD = new SequentialQueue(array5);
  expect(queueA.front).toBe(0);
  expect(queueA.rear).toBe(5);
  expect(queueB.front).toBe(0);
  expect(queueB.rear).toBe(10);
  expect(queueC.front).toBe(0);
  expect(queueC.rear).toBe(0);
  expect(queueD.front).toBe(0);
  expect(queueD.rear).toBe(0);
});

test('SequentialQueue enQueue', () => {
  let queueA = new SequentialQueue(array5, 10);
  let queueB = new SequentialQueue(array11, 10);
  let queueC = new SequentialQueue(undefined, 10);
  let queueD = new SequentialQueue(array5);

  expect(queueA.enQueue(6).rear).toBe(6);
  try{
    queueB.enQueue(11)
  }
  catch(e){
    expect(e.message).toBe('Queue is full');
  }
  expect(queueC.enQueue(1).front).toBe(0);
  try{
    queueD.enQueue(1)
  }
  catch(e){
    expect(e.message).toBe('Queue is full');
  }
});

test('SequentialQueue deQueue', () => {
  let queueA = new SequentialQueue(array5, 10);
  let queueB = new SequentialQueue(array11, 10);
  let queueC = new SequentialQueue(undefined, 10);

  expect(queueA.deQueue().data).toBe(1);
  expect(queueA.front).toBe(1);
  expect(queueB.deQueue().data).toBe(1);
  expect(queueB.rear).toBe(10);
  expect(queueC.deQueue()).toBe(null);
});

test('SequentialQueue isEmpty', () => {
  let queueA = new SequentialQueue(array5, 10);
  let queueC = new SequentialQueue(undefined, 10);

  expect(queueA.isEmpty()).toBe(false);
  expect(queueC.enQueue(1).isEmpty()).toBe(false);
  queueC.deQueue();
  expect(queueC.isEmpty()).toBe(true);
});


test('SequentialQueue isFull', () => {
  let queueB = new SequentialQueue(array11, 10);
  let queueC = new SequentialQueue(undefined, 10);
  let queueD = new SequentialQueue(array5);

  expect(queueB.isFull()).toBe(true);
  queueB.deQueue();
  expect(queueB.isFull()).toBe(true); //deQueue doesn't remove element, queue is still full.
  expect(queueC.isFull()).toBe(false);
  expect(queueD.isFull()).toBe(false);
});

test('SequentialQueue frontElem', () => {
  let queueA = new SequentialQueue(array5, 10);
  let queueB = new SequentialQueue(array11, 10);
  let queueC = new SequentialQueue(undefined, 10);

  expect(queueA.frontElem.data).toBe(1);
  expect(queueA.front).toBe(0);
  expect(queueB.frontElem.data).toBe(1);
  expect(queueB.front).toBe(0);
  expect(queueC.frontElem).toBe(null);
});

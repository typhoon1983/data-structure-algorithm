import CircularSequentialQueue from './CircularSequentialQueue';

let array5 = [1,2,3,4,5];
let array11 = [1,2,3,4,5,6,7,8,9,10,11];

test('CircularSequentialQueue constructor', () => {
  let queueA = new CircularSequentialQueue(array5, 10);
  let queueB = new CircularSequentialQueue(array11, 10);
  let queueC = new CircularSequentialQueue(undefined, 10);
  let queueD = new CircularSequentialQueue(array5);
  expect(queueA.front).toBe(0);
  expect(queueA.rear).toBe(5);
  expect(queueB.front).toBe(0);
  expect(queueB.rear).toBe(9);
  expect(queueC.front).toBe(0);
  expect(queueC.rear).toBe(0);
  expect(queueD.front).toBe(0);
  expect(queueD.rear).toBe(0);
});

test('CircularSequentialQueue enQueue', () => {
  let queueA = new CircularSequentialQueue(array5, 10);
  let queueB = new CircularSequentialQueue(array11, 10);
  let queueC = new CircularSequentialQueue(undefined, 10);
  let queueD = new CircularSequentialQueue(array5);

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

test('CircularSequentialQueue deQueue', () => {
  let queueA = new CircularSequentialQueue(array5, 10);
  let queueB = new CircularSequentialQueue(array11, 10);
  let queueC = new CircularSequentialQueue(undefined, 10);
  expect(queueA.deQueue().data).toBe(1);
  expect(queueA.front).toBe(1);
  expect(queueB.deQueue().data).toBe(1);
  expect(queueB.rear).toBe(9);
  expect(queueB.enQueue(10).rear).toBe(0);
  queueB.deQueue();
  expect(queueB.enQueue(11).rear).toBe(1);
  expect(queueC.deQueue()).toBe(null);
});

test('CircularSequentialQueue isEmpty', () => {
  let queueA = new CircularSequentialQueue(array5, 10);
  let queueC = new CircularSequentialQueue(undefined, 10);

  expect(queueA.isEmpty()).toBe(false);
  expect(queueC.enQueue(1).isEmpty()).toBe(false);
  queueC.deQueue();
  expect(queueC.isEmpty()).toBe(true);
});


test('CircularSequentialQueue isFull', () => {
  let queueB = new CircularSequentialQueue(array11, 10);
  let queueC = new CircularSequentialQueue(undefined, 10);
  let queueD = new CircularSequentialQueue(array5);

  expect(queueB.isFull()).toBe(true);
  queueB.deQueue();
  expect(queueB.isFull()).toBe(false);
  expect(queueC.isFull()).toBe(false);
  expect(queueD.isFull()).toBe(false);
});

test('CircularSequentialQueue frontElem', () => {
  let queueA = new CircularSequentialQueue(array5, 10);
  let queueB = new CircularSequentialQueue(array11, 10);
  let queueC = new CircularSequentialQueue(undefined, 10);

  expect(queueA.frontElem.data).toBe(1);
  expect(queueA.front).toBe(0);
  expect(queueB.frontElem.data).toBe(1);
  expect(queueB.front).toBe(0);
  expect(queueC.frontElem).toBe(null);
});

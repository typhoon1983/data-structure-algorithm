import LinkedQueue from './LinkedQueue';

let array5 = [1,2,3,4,5];

test('LinkedQueue constructor', () => {
  let queueA = new LinkedQueue(array5);
  let queueB = new LinkedQueue();
  expect(queueA.front.data).toBe(null);
  expect(queueA.front.next.data).toBe(1);
  expect(queueA.rear.data).toBe(5);
  expect(queueB.front.data).toBe(null);
  expect(queueB.rear.data).toBe(null);
});

test('LinkedQueue enQueue', () => {
  let queueA = new LinkedQueue(array5);
  expect(queueA.enQueue(6).rear.data).toBe(6);

});

test('LinkedQueue deQueue', () => {
  let queueA = new LinkedQueue(array5);
  let queueB = new LinkedQueue();

  expect(queueA.deQueue().data).toBe(1);
  expect(queueA.front.next.data).toBe(2);
  expect(queueB.deQueue()).toBe(null);
});

test('LinkedQueue isEmpty', () => {
  let queueA = new LinkedQueue(array5);
  let queueB = new LinkedQueue();

  expect(queueA.isEmpty()).toBe(false);
  expect(queueB.isEmpty()).toBe(true);
  queueA.deQueue();
  queueA.deQueue();
  queueA.deQueue();
  queueA.deQueue();
  queueA.deQueue();
  expect(queueA.isEmpty()).toBe(true);
});

test('LinkedQueue frontElem', () => {
  let queueA = new LinkedQueue(array5);
  let queueB = new LinkedQueue();

  expect(queueA.frontElem.data).toBe(1);
  expect(queueB.frontElem).toBe(null);
});

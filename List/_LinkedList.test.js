import LinkedList from './_LinkedList';

test('Link List constructor', () => {
  try{
    let listError = new LinkedList();
  }
  catch(e){
    expect(e.message).toBe('ListLinked can not be used as constructor directly.');
  }
});

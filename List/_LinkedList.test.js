import LinkedList from './_LinkedList';

test('LinkedList constructor', () => {
  try{
    let listError = new LinkedList();
  }
  catch(e){
    expect(e.message).toBe('TypeError: LinkedList can not be used as constructor directly.');
  }
});

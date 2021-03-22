import ErrorRepository from '../basic';

let repository = new ErrorRepository(); 

test('code', () => {
  let result = repository.translate(404);

  expect(result).toBe('Not found');
});

test('codeError', () => {
  let result = repository.translate(400);

  expect(result).toThrowError(Error);
});
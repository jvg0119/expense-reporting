function sum(a, b) {
  return a + b;
}

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
test('adds 2 numbers', () => {
  expect(sum(2,3)).toBe(5)
})

const mult = (a,b) => a * b;
test('multiply 2 numbers', () => {
  expect(mult(3,3)).toBe(9)
})

const greet = (name = 'anonymous') => `My name is ${name}.`;

test('should say your name', () =>{
  const name = "Joe";
  expect(greet(name)).toBe('My name is ' + name + '.')
})

test('should say your default name when name is not provided', () =>{
  expect(greet()).toBe('My name is ' + 'anonymous' + '.')
})
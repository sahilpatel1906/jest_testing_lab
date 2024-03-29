const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 1000000;
    actual = sum(500000, 500000);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -10;
    actual = sum(-8, -2);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 2;
    actual = sum(2,0);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {

  test("can subtract two small numbers", () => {
    expected = 10;
    actual = subtract(12,2);
    expect(actual).toBe(expected);
  })

  test("can subtract two large numbers", () => {
    expected = 1000000;
    actual = subtract(3000000, 2000000);
    expect(actual).toBe(expected);
  })

  test("can subtract one negative number from one positive number", () => {
    expected = 10;
    actual = subtract(8, -2);
    expect(actual).toBe(expected);
  })

  test("can subtract two negative numbers", () => {
    expected = 0;
    actual = subtract(-5,-5);
    expect(actual).toBe(expected);
  })

});

describe('multiply', () => {

  test("can multiply two small numbers", () => {
    expect(multiply(9,10)).toBe(90);
  })

  test("can multiple by 0", () => {
    expect(multiply(9,0)).toBe(0);
  })

  
});

describe('divide', () => {

  test("can divide two integers", () => {
    expect(divide(9,3)).toBe(3);
  })

  test("can divide by a decimal value", () => {
    expect(divide(10,2.5)).toBe(4);
  })

});

describe('modulus', () => {

  test("can find modulus of two small numbers", () => {
    expect(modulus(10,4)).toBe(2);
  })

  test("can find modulus of two large numbers", () => {
    expect(modulus(1000000, 400000)).toBe(200000);
  })

});

describe('even', () => {

  test("can return true for small even number", () => {
    expect(even(10)).toBe(true);
  })

  test("can return false for small even number", () => {
    expect(even(17)).toBe(false);
  })

});

describe('odd', () => {

  test("can return true for small odd number", () => {
    expect(odd(11)).toBe(true);
  })

  test("can return true for small odd number", () => {
    expect(odd(2)).toBe(false);
  })

});

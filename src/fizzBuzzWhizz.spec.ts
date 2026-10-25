
import { game } from "./fizzBuzzWhizz";

describe('FizzBuzz Game', () => {
  test('if the number is 1 return 1', () => {
    expect(game(1)).toEqual(1);
  });

  test('if the number is 2 return Whizz', () => {
    expect(game(2)).toEqual('Whizz');
  });

  test('if the number is 3 return FizzWhizz', () => {
    expect(game(3)).toEqual('FizzWhizz');
  });

  test('if the number is 4 return 4', () => {
    expect(game(4)).toEqual(4);
  });

  test('if the number is 5 return BuzzWhizz', () => {
    expect(game(5)).toEqual('BuzzWhizz');
  });

  test('if the number is 6 return Fizz', () => {
    expect(game(6)).toEqual('Fizz');
  });

  test('if the number is 7 return Whizz', () => {
    expect(game(7)).toEqual('Whizz');
  });

  test('if the number is 8 return 8', () => {
    expect(game(8)).toEqual(8);
  });

  test('if the number is 9 return Fizz', () => {
    expect(game(9)).toEqual('Fizz');
  });

  test('if the number is 10 return Buzz', () => {
    expect(game(10)).toEqual('Buzz');
  });

  test('if the number is 11 return Whizz', () => {
    expect(game(11)).toEqual('Whizz');
  });

  test('if the number is 12 return Fizz', () => {
    expect(game(12)).toEqual('Fizz');
  });

  test('if the number is 15 return FizzBuzz', () => {
    expect(game(15)).toEqual('FizzBuzz');
  });

  test('if the number is 20 return Buzz', () => {
    expect(game(20)).toEqual('Buzz');
  });

  test('if the number is 30 return FizzBuzz', () => {
    expect(game(30)).toEqual('FizzBuzz');
  });

  test('if the number is 75 return FizzBuzz', () => {
    expect(game(75)).toEqual('FizzBuzz');
  });
});

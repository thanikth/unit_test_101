import { fizzBuzz } from "../fizzBuzz";

describe("circular buffer", () => {
    test.each([
        [1, 1],
        [2, 2],
        [3, 'Fizz'],
        [10, 'Buzz'],
        [15, 'FizzBuzz'],
        [30, 'FizzBuzz'],
    ])("should be say %i", (input, expected) => {
        expect(fizzBuzz(input)).toBe(expected)
    })
});
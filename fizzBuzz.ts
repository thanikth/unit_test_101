export const fizzBuzz = (num: number): number | "Fizz" | "Buzz" | "FizzBuzz" => {

    if ((num % 5 === 0) && (num % 3 === 0)) {
        return "FizzBuzz";
    }
    else if (num % 3 === 0) {
        return "Fizz"
    }
    else if (num % 5 === 0) {
        return "Buzz"
    }
    else {
        return num
    }

}
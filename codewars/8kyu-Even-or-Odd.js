//🤔DESCRIPTION:
//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//✅SOLUTION:

function evenOrOdd(number) {
    return number % 2 === 0 ? `${number} === Even` : `${number} === Odd`
}

console.log(evenOrOdd(2))
console.log(evenOrOdd(7))
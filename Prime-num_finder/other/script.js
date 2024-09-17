isPrime(prompt("Enter a number to check if it is prime:"));

function isPrime(number) {
    if (number <= 1) {
        console.log(`${number} is not a prime number.`);
        return;
    }

    for (let i = 2; i < number; i++) {
        console.log(`Dividing ${number} by ${i}...`);
        if (number % i === 0) {
            console.log(`${number} is divisible by ${i}.`);
            console.log(`${number} is not a prime number.`);
            return;
        }
    }

    console.log(`${number} is a prime number.`);
}
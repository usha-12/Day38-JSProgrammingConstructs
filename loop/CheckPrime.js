let number = 7;
let isPrime = true;
for (let i = 2; i <= number/2; i++) {
    if (number % i  == 0) {
        isPrime=false;
        break; 
    }
}
if (isPrime) {
    console.log(number," is prime number");
} else {
    console.log(number," is not prime number");
}
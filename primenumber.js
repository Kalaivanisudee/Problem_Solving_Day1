//what is prime?
// A number is only divisible by 1 and itself
//2,3,5,7,11,13,17,19,23....
//Any EvenNumber given as input it will give output as false for finding prime number except 2, because it's evenprimnumber
let count = 0;
function isPrime(num) {
  for (let fact = 2; fact < num; fact++) {
    count++;
    if (num % fact == 0) {
      return false;
    }
  }
  return true;
}

console.log("Given EvenNumber is prime number?: ", isPrime(100)); //false
console.log("Number of Iteration: ", count); //Number of Iteration:  1

console.log("Given EvenNumber is prime number?: ", isPrime(2)); //true
console.log("Number of Iteration: ", count); //Number of Iteration:  1
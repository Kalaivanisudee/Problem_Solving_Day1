//what is prime?
// A number is only divisible by 1 and itself
//2,3,5,7,11,13,17,19,23....
/*
1.Any EvenNumber given as input it will give output as false for finding prime number except 2, because it's evenprimnumber
2.factor=a*b
Givennumber:100
factor of 100 => 1,2,4,5,10,20,25,100
note:
 * always 1 and given number is comes us factor so we remove them
 * if 2 is factor 2*50=100 then 50 is also factor of 100
 * if 4 is factor 4*25=100 then 25 is also factor of 100
 * if 5 is factor 5*20=100 then 20 is also factor of 100
 * if 10 is factor 10*10=100 then 10 is final factor of 100
 * so n is factor n*n=givennumber then n is final factor of 100
 * means sqrt(100) =>10
 * means sqrt(givennumber) =>final factor
 3. in this case Math function called every looping it takes some time to give output if given number is largePrimeNumber...For every loop memoryspace alloted for Math function it increases space complexity.
*/
//
let count = 0;
function isPrime(num) {
  for (let fact = 2; fact*fact<=num; fact++) {
    count++;
    if (num % fact == 0) {
      return false;
    }
  }
  return true;
}

console.log("Given OddNumber is prime number?: ", isPrime(103)); //true
console.log("Number of Iteration: ", count); //Number of Iteration: 9


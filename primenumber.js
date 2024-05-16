// Prime number- A number is only divisible by 1 and itself
// 2,3,5,7,11,13,17,19,23...

function isPrime(num){
    for(let i = 2; i < num ;i ++){
        if(num % i ==0)
            return false;
        return true;
    }
}
console.log(isPrime(10));

console.log(Math.sqrt(100));
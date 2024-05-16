//Sorting an array

let arr = Array.from({length:10},()=>Math.floor(Math.random()*100))
console.log(arr.length);// Output:10
console.log(arr)

for(let i =0 ; i<arr.length; i++){
    let minIndex = i;
    for ( let j =i+1 ; j<arr.length; j++){
        if(arr[minIndex]>arr[j]){ 
            minIndex = j;
        }
    }
    temp=arr[i];
    arr[i]=arr[minIndex];
    arr[minIndex]=temp;
}

console.log(arr);
console.log(" Second least  element in an array:",arr[1]);
console.log(...arr);
//Time Complexity:O(n^2)
//Space Complexity:O(n)



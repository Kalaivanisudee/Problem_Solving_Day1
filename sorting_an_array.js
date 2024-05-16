//Sorting an array

let arr = [5,1,8,4,3];
console.log(arr.length);// Output:5

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

console.log(arr);//[ 1, 3, 4, 5, 8 ]
console.log(...arr);//1 3 4 5 8
//Time Complexity:O(n^2)
//Space Complexity:O(n)



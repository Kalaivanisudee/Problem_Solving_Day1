//Sorting an array
let arr = [5,1,8,4,3];
console.log(arr.length);// Output:5

let temp = [];
for(let i =0 ; i<arr.length; i++){
    let minimum = arr[0];
    let minIndex = 0;
    for ( let j =0 ; j<arr.length; j++){
        if(minimum>arr[j]){ 
            minimum = arr[j];
            minIndex = j;
        }
    }
    temp.push(minimum);
    arr[minIndex]=+Infinity;
}
console.log(temp);// [ 1, 3, 4, 5, 8 ]
console.log(arr);//[ Infinity, Infinity, Infinity, Infinity, Infinity ]
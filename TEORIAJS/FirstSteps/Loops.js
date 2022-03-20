/*WHILE loop*/
let myArray = [];
let i = 5;
while(i>=0){
    myArray.push(i);
    i--;
}
console.log(myArray);

/*FOR loop*/
let myArray1 = [];
let myArray2 = [];
let myArrayBackwards = [];
for(let i= 1; i<= 5; i++) myArray1.push(i);
for(let i= 1; i<= 10; i+=2) myArray2.push(i);
for(let i= 10; i >= 0; i--) myArrayBackwards.push(i);
console.log(myArray1);
console.log(myArray2);
console.log(myArrayBackwards);

/*you can manipulate arrays with 'for' loops */
let myArr = [ 2, 3, 4, 5, 6];
let total = 0 ;
for(let i = 0 ; i < myArr.length ; i++) total+=myArr[i];

/*nesting FOR loops*/
function multiplyAll(arr) {
    let product = 1;

    for (let i=0; i < arr.length; i++) {
        for (let j=0; j < arr[i].length; j++) product=product*arr[i][j];
    }
    return product;  /*this will return the product of all the numbers in the array*/
}
console.log(multiplyAll([[1,2],[3,4],[5,6,7]]));

/*DO WHILE*/
let myArray4 = [];
let i3 = 10;
do {
    myArray4.push(i3);
    i3++;
}while (i3 < 10)

/*RECURSION you can replace loops using recursion instead */
let arr1 = [1,2,3,4,5];

/*return the sum of the 'n' numbers in an array*/
function sumNumbers(arr,n){
    if(n<=0) return 0;
    return sumNumbers(arr, n-1) + (arr[n-1]);
} /*the function will call itself until 'n' <= 0*/
console.log(sumNumbers(arr1,3));

/*return the product of the 'n' numbers in an array*/
function multiplyNumbers(arr,n){
    if(n<=0) return 1;
    return multiplyNumbers(arr, n-1) * (arr[n-1]);
}
console.log(multiplyNumbers(arr1,4));

/*Using recursion with an array*/
function countdown(n){
    if(n < 1) return [];
        else {
            const countArray = countdown(n-1)
            countArray.unshift(n);
            return countArray;
        }
}

/*or*/

function countDown(num){
    return (num < 1 ) ? [] : [num].concat(countDown(num - 1));
}
console.log(countDown(5));


function rangeOfNumbers(startNum, endNum) {
    if(startNum > endNum) return 0;
    else if (startNum === endNum) return [startNum];
    else {
        const myRange = rangeOfNumbers(startNum, endNum - 1);
        myRange.push(endNum);
        return myRange;
    }
};

console.log(rangeOfNumbers(1,6));
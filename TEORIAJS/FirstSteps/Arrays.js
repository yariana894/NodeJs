/*Arrays*/
var myArray = ["samuel", 2];
var myArray2 = [["Real Madrid", 10] , ["Barcelona", 7], myArray];
console.log(myArray2);

var myArrayPosition= myArray[0];
console.log(myArrayPosition);

/*you can modify directly the stored value in a position*/
myArray[1]=45;

/*you can have an array of arrays (multidimensional)*/
var myMultiArray= [ [1,2,3], [4,5,6], [7,8,9] ];
var myMultiData= myMultiArray[0][2]; /*3*/
console.log(myMultiData);

/*Manipulate Arrays with push()*
you can ADD parameters at the END of an array with the push function  */
var arr1 = [1,2,3];
console.log("Array before push " + '[' + arr1 + ']');

arr1.push(4); /*now it has 4 positions and the last one is the number 4*/
console.log("Array after push " + '[' + arr1 + ']');

console.log('----------------------------------------------------------');

/*Manipulate Arrays with pop() you can DELETE parameters at the END of an array*/
var threeArr = [1, 4, 6];
console.log("Array before pop " + '[' + threeArr + ']');
threeArr.pop();
console.log("Array after pop " + '[' + threeArr + ']');

/*you can delete the last element of an array and store it in a variable*/
/*now the array has 2 positions and the variable oneDown has the value of 6*/
var oneDown = threeArr.pop();
console.log("Last element of the array: " + oneDown);

console.log('------------------------------------------------------')

/*Manipulate Arrays with shift() you can DELETE parameters at the BEGINNING of an array*/
var ourArray = ["Stimpson", "J", ["cat"]];
console.log("Array before shift: " + '[' + ourArray + ']');

ourArray.shift(); /*now the array has 2 positions and the variable removedFromOurArray has the value of 'Stimpson'*/
console.log("Array after shift: " + '[' + ourArray + ']');

var removedFromOurArray = ourArray.shift(); /*you can delete the first element of an array and store it in a variable*/
console.log('Element removed: ' + removedFromOurArray);

console.log('------------------------------------------------------')

/*Manipulate Arrays with unshift() you can ADD parameters at the BEGINNING of an array*/
var ourArray2 = ["Simpsons", "S", ["bat"]];
console.log("Array before unshift: " + '[' + ourArray2 + ']');

ourArray2.unshift(['Portugal', 34]); /*adds the element at the beginning of the array.*/
console.log("Array after unshift: " + '[' + ourArray2 + ']');

console.log('------------------------------------------------------');

let myNewArray = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let myNumbers = [1,34,56,87,91];
let myNumbers2;
let myNewArray2;

let myMaxNumber = Math.max(...myNumbers); /*maximum value of an array */
let myMinNumber = Math.min(...myNumbers); /*minimum value of an array */

console.log(myMaxNumber);
console.log(myMinNumber);

myNumbers2 = [...myNumbers];  /*to copy an array into another*/
myNewArray2 = [...myNewArray];

console.log(myNumbers2);
console.log(myNewArray2);

console.log('------------------------------------------------------');

/*you can select separated elements from an array to put in another*/
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a , b);

const [c,,, d] = [3, 4, 5, 6];
console.log(c , d);

let e = 8, f = 6;
[e , f] = [f,e];
console.log(e , f);

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
    const [,, ...arr2] = list; 
    return arr2;
}

const arr2 = removeFirstTwo(source);

console.log('------------------------------------------------------');

let numeros1 = [5, -7, 22, 16]

let numerosPositivos1 = numeros1.filter(function (numero) {
    if (numero >= 0) return true
    else return false })  // [5,22,16]

console.log('------------------------------------------------------');
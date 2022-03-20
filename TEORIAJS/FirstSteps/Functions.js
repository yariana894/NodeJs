/*You can create a function to divide the code just*/
function function1(){
    console.log('The function will print this text every time that it is called');
}

function1(); /*you can call it just writing the name*/

console.log('-----------------------------------------------------------------')

/*You can add parameters to the function to pass values directly*/
function functionWithPArameters(param1, param2){
    console.log('The value of the parameters will be these: ' + param1 + ' and ' + param2)
}
/*The value of the parameters will be given when the function is called*/
functionWithPArameters(1,2);

console.log('-----------------------------------------------------------------')

/*Global variables are defined in the main code and are seen in all of it and
 Local variables are defined inside a function and are only seen in the function */

var someVar = "Hat"; /*global variable*/

function myFun() {
    var someVar = "Head"; /*local variable*/
    console.log(someVar);
}

/*you can call a local and a global variable with the same name but the local will have preference
when it is used in the function*/
myFun();

console.log('-----------------------------------------------------------------');

/*You can use a return statement to send a value back out of a function.*/
function timesFive(num){
    return num*5;
}
console.log('This is the parameter multiplied by 5: ' + timesFive(2));

console.log('-----------------------------------------------------------------');

/*If the function does not have a return statement
the function will change the global sum to undefined.*/
var num=2;
function sumBlank(){
    num+=5;
}
console.log(sumBlank())

console.log('-----------------------------------------------------------------');
/*You can assign the value of a variable the value returned of a function*/
var minus=0;
function functionExample(num){
    return num - 2;
}
minus = functionExample(10);
console.log('And now the variable will have the value returned which is: ' + minus);

console.log('-----------------------------------------------------------------');

/*To make random decimal numbers between 0 and 1*/
function randomDecimalNumbers(){
    return Math.random();/*this can return 0 but never 1*/
}
console.log(randomDecimalNumbers());

/*To make random whole numbers between 0  and the number multiplied by (excluded)*/
function randomWholeNumbers(){
    return Math.floor(Math.random() * 10); /*Math.floor will round the decimal number to the nearest whole number*/
    /*this will give a number between 0 and 9*/
}
console.log(randomWholeNumbers());

/*To make a random number in a range*/
function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomRange(6,10));

console.log('-----------------------------------------------------------------');
/*convert a String to an Integer */
function convertToInteger(str) {
    return parseInt(str);
}
console.log(convertToInteger("56"));

/*Convert from decimal to binary*/
function convertToInteger(str) {
    return parseInt(str, 2); /*the radix can be a number between 2 and 36 depending on what base do you want*/
}
console.log(convertToInteger(10011));



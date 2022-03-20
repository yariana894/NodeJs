/*The variables on javaScript are:
-undefined,
-null,
-boolean,
-string,
-symbol,
-bigint,
-number,
-object*/

/*To declare a variable write 'var' before the name of the variable, a variable undefined is a NaN (not a number)*/
var example;
example=0;

/*to assign a value:*/
var value = 5;

/*you can assign the value of a variable to another*/
example = value;

/*Type number*/
/*It represents a numeric data*/
var sum=10+10;
var diff=20-10;
var product=10*10;
var quotient=20/2;

sum+=10;
diff-=10;
product*=10;
quotient/=10;

/*Type Strings*/
var myString = "hey";
var myString2="you can quote inside a String like this \"using bars\" ";

/*you can use '' or "" to write a String, and you can use one type inside of the other so you don't have to use bars*/
var myString3 = 'I said "let\'s go"' + ' and he said "yep"';
myString3+='and we went and said ' + myString2;

/*Special scape characters:

\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	word boundary
\f	form feed

 */

/*to know the number of characters in a String*/
var myLength = myString3.length;

/*to know characters in a position*/
var myLengthPosition1=myString3[0];
var myLengthLastPosition=myString3[myString3.length-1];

console.log("hello");


/* unlike var, when using let, a variable with the same name can only be declared once.*/
var camper='samuel';
var camper='carlos';

let pokemon="squirtle";
pokemon = 'charizard'
//let pokemon="charmander"; /*this throws an exception*/

/*var declares the variable globally and let only in his block of code*/
var number = 1;

function example1(){ /*in this case it gets rewritten*/
    number = 6;
    return number;
}

function example2(){ /*in this case it gets rewritten*/
    let number = 5;
    return number;
}

console.log(number);
console.log(example1());
console.log(example2());

/*const is used so the variables can't change */
const name = 'SAMUEL';
//name = 'PEDRO' this throws an exception


const myLittleArray = [1,2,3];
/*you can do this*/
myLittleArray[0] = 7; /*and change the value of an array*/

/*to prevent this you can do this*/
Object.freeze(myLittleArray);
myLittleArray[0] = 4;
console.log(myLittleArray); /*it does not change*/

const SAMUEL = { height : 1.8, weight : 73 };
console.log(SAMUEL);
Object.freeze(SAMUEL);
SAMUEL.height = 1.9;
console.log(SAMUEL); /*it does not change*/


/*you can pass a function as an argument*/
const myFunc = function() {
    const myVar = "value";
    return myVar;
}

/*no need to put a name*/
const myFunc1 = () => {
    const myVar = "value";
    return myVar;
}

/*and simplified when it is just one line*/
const myFunc2 = () => 'value';

/*you can pass arguments*/
const myConcat = (arr1, arr2) => arr1.concat(arr2);


/*you can add default parameters*/
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());

/*you can make a flexible number of arguments in a function*/
function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));

const sum1 = (...things) => things.reduce((a, b) => a + b);
console.log(sum1(1,2,3,4,5,6));




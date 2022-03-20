/*IF Statement conditional*/

function question(answer) {
    if (answer) /*if answer is true return true else return false*/
        return 'It is true';
        return 'It is false';
}

console.log(question(true));
console.log(question(false));

console.log('------------------------------------------');

/*The operator '==' it is the equality operator*/

function equalNumbers(number){
    if(number == 10) return 'It is equal';
    return 'It is not equal';
}

console.log(equalNumbers(9));
console.log(equalNumbers(10));
console.log(equalNumbers('10')); /*javaScript converts the data type and it works*/

console.log('------------------------------------------');

/*The operator '===' it is the Strict Equality operator it doesn't converts the data type*/
/*you can identify the type of a data using typeof*/

let num = 5;
console.log(typeof num); /*you can use typeof to compare a parameter in a function*/
function comparingExample(num){
    if(typeof num== 'String') return 'It is an String';
    return 'It is another thing';
}
console.log(comparingExample(num));

console.log('------------------------------------------');

function StrictEqualNumbers(number){
    if(number === 10) return 'It is equal';
    return 'It is not equal';
}

console.log(StrictEqualNumbers(9)); /*false*/
console.log(StrictEqualNumbers(10));/*true*/
console.log(StrictEqualNumbers('10')); /*false*/

console.log('------------------------------------------');

/*Inequality operator != and Strict Inequality Operator !==*/

function InEqualNumbers(number){
    if(number != 10) return 'It is different';
    return 'It is the same';
}

console.log(InEqualNumbers(9)); /*true*/
console.log(InEqualNumbers(10));/*false*/
console.log(InEqualNumbers('10')); /*false*/

function StrictInEqualNumbers(number){
    if(number !== 10) return 'It is different';
    return 'It is the same';
}

console.log(StrictInEqualNumbers(9)); /*true*/
console.log(StrictInEqualNumbers(10));/*false*/
console.log(StrictInEqualNumbers('10')); /*true*/

console.log('------------------------------------------');

let thing = 5;
function prueba(){
    if(thing < 4 ) return 'menor que 4';
    else if (thing == 5) return 'igual que 5'
    return 'mayor que 4';
}
console.log(prueba());


function testSize(num) {

    if(num < 5){
        return 'Tiny';
    } else if(num < 10){
        return 'Small';
    }else if(num < 15){
        return 'Medium';
    }else if(num < 20){
        return 'Large';
    }else if(num >= 20){
        return 'Huge';
    }
    return "Change Me";
}

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {

    if(strokes == 1){
        return names[0];
    }else if(strokes <= par - 2){
        return 'Eagle';
    }else if(strokes == par - 1){
        return 'Birdie';
    }else if(strokes == par){
        return 'Par';
    }else if(strokes == par + 1){
        return 'Bogey';
    }else if(strokes == par + 2){
        return 'Double Bogey';
    }else if(strokes >= par + 3){
        return 'Go Home!';
    }
    return "Change Me";
}

golfScore(5, 4);



/*IF ELSE SIMPLIFIED*/
function checkEqual1(a, b) {
    if(a == b) return 'Equal';    return 'Not Equal';}
/*This is the same as the function below*/
console.log(checkEqual1(1, 2));

function checkEqual(a, b) {
    return a == b ? 'Equal' : 'Not Equal'};
console.log(checkEqual(1, 2));

/*With multiple if else*/
function checkSign(num) {
    return (num > 0) ? 'positive' :(num === 0) ? 'zero' :'negative';
}
console.log(checkSign(10));




/*SWITCH statement*/
function caseInSwitch(val) {

    switch (val) {
        case 1:
            return "alpha";
            break;
        case 2:
            return "beta";
            break;
        case 3:
            return "gamma";
            break;
        case 4:
            return "delta";
            break;

        default:
            return 'stuff';
            break;
    }
}

caseInSwitch(1);

function caseInSwitch(val) {
    var answer = "";

    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
        default:
            return 'stuff';
            break;
    }
    return answer;
}
caseInSwitch(1);

function sequentialSizes(val) {
    switch(val){
        case 1:
        case 2:
        case 3: return 'Low'
        case 4:
        case 5:
        case 6: return 'Mid';
        case 7:
        case 8:
        case 9: return 'High';
    }
}

sequentialSizes(1);

/*Returning booleans from functions*/

/*the common way would be like this*/
function isEqual(a,b) {
    if (a === b) {
        return true;
    } else {
        return false;
    }
}

/*but you can do it much more simpler like this*/
function isEqual2(a,b) {
    return a === b; /*this will return a boolean directly (you can also use the other comparatives with the same result)*/
}


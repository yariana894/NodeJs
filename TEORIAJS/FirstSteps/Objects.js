/*Objects are useful for storing data in a structured way, and can represent real world objects*/


var myDog = {name: "lobo", legs: 4, tails: 1, friends: ["gato", "pajaro"]}; /*you can stored like this*/
var cat = {"name": "Whiskers", "legs": 4, "tails": 1, "enemies": ["Water", "Dogs"]};  /*or like this*/

console.log(myDog);
console.log(cat);

/*There are two ways to access the properties of an object: dot notation (.) and bracket notation ([])*/
let dogName = myDog.name;
let dogLegs=myDog.legs;

console.log("Dog's name: " + dogName + "\n" + "Dog's legs: " + dogLegs);

/*and with []*/
let catName = cat["name"];
let catEnemies = cat["enemies"];

console.log("Cat's name: " + catName + "\n" + "Cat's enemies: " + catEnemies);

/*you can also access object properties stored as the value of a variable*/

let testObject={ 12: "samuel", 13: "carlos", 14: "cid"};
let playerNumber = 12;
let player = testObject[playerNumber];
console.log('The name of the player is: ' + player);

/*updating object properties*/
testObject["12"] = "alonso";
myDog.name = "wolf";
console.log(testObject);
console.log(myDog);

/*adding properties to an object*/
testObject["16"] = "gil";
myDog.bark = "woof";
console.log(testObject);
console.log(myDog);

/*Deleting properties*/
delete myDog.legs;
console.log(myDog);

/*using objects for lookups*/
function phoneticLookup(val) {
    var result = "";
    var lookup = {

        alpha: "Adams", bravo:"Boston", charlie: "Chicago", delta: "Denver", echo:"Easy", foxtrot : "Frank"};
        result = lookup[val];
        return result;  }

console.log(phoneticLookup("charlie"));

/*CHECK if an object has a property returns true or false */
function checkObj(obj, checkProp) {
    if(obj.hasOwnProperty(checkProp)) return obj[checkProp];
        return "Not Found";
}
console.log(checkObj(myDog,"name")); /*it has the property so it will return the name*/

/*Store objects in arrays*/
let myMusic = [
    {artist: "Billy Joel", title: "Piano Man", release_year: 1973, formats: ["CD","8T","LP"], gold: true}
    ,
    {artist: "Daft Punk", title: "Homework", release_year: 1997, formats: ["CD","8T","LP"], gold: true} ];

/*accessing nested objects*/
var myStorage = {
    car: {
        inside: {"glove box": "maps", "passenger seat": "crumbs"},
        outside: {"trunk": "jack"}
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];

/*Accessing Nested Arrays*/
var myPlants = [{type : 'flowers', list: ['roses', 'tulip', 'dandelion']} ,
                {type : 'trees', list: ['fir', 'pine', 'birch']}]
var secondFlower = myPlants[0].list[1]; /*this will be the tulip*/


/*PRACTICE*/
var recordCollection = {
    2548: {albumTitle: 'Slippery When Wet', artist: 'Bon Jovi', tracks: ['Let It Rock', 'You Give Love a Bad Name']},
    2468: {albumTitle: '1999', artist: 'Prince', tracks: ['1999', 'Little Red Corvette']},
    1245: {artist: 'Robert Palmer', tracks: []},
    5439: {albumTitle: 'ABBA Gold'}
};

function updateRecords(records, id, prop, value) {
    if (prop !== 'tracks' && value !== "") {
        records[id][prop] = value;
    } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
        records[id][prop] = [value];
    } else if (prop === "tracks" && value !== "") {
        records[id][prop].push(value);
    } else if (value === "") {
        delete records[id][prop];
    }
    return records;
}

console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));


/*PRACTICE Profile lookup*/
let contacts = [
    {firstName: "Akira", lastName: "Laine", number: "0543236543", likes: ["Pizza", "Coding", "Brownie Points"]},
    {firstName: "Harry", lastName: "Potter", number: "0994372684", likes: ["Hogwarts", "Magic", "Hagrid"]},
    {firstName: "Sherlock", lastName: "Holmes",number: "0487345643", likes: ["Intriguing Cases", "Violin"]},
    {firstName: "Kristian", lastName: "Vos",number: "unknown",likes: ["JavaScript", "Gaming", "Foxes"]}
];

/*A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.
The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
If both are true, then return the "value" of that property.
If name does not correspond to any contacts then return the string No such contact.
If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.*/

function lookUpProfile(name, prop) {
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            if (prop in contacts[i]) return contacts[i][prop];
            return "No such property";
        }
    }return "No such contact";
}
console.log(lookUpProfile('Akira', 'likes'));



const HIGH_TEMPERATURES = {yesterday: 75, today: 77, tomorrow: 80};
const today1 = HIGH_TEMPERATURES.today;
const tomorrow1 = HIGH_TEMPERATURES.tomorrow;

/*you can simplify the variables like this the variables will also be created and assigned the values*/
const  {today , tomorrow} = HIGH_TEMPERATURES;

/*you can change the name of variables in an object like this*/
const  {today : highToday , tomorrow: highTomorrow} = HIGH_TEMPERATURES;

/*and in nested elements*/
const LOCAL_FORECAST = {yesterday: { low: 61, high: 75 },
                        today: { low: 64, high: 77 },
                        tomorrow: { low: 68, high: 80 }};

const {today :{low : lowToday1 , high : highToday1}} = LOCAL_FORECAST;



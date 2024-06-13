//Arithmetic Operators in JavaScript
console.log(3.5 + 20)
console.log(2024 - 1969)
console.log(65 / 240)
console.log(0.2708 * 100)



//Operators are used in the two string as well to concatinate
console.log('I love to play' + 'badminton')
console.log('Hello' + 'World')
console.log('Hello' + ' ' + 'World')


//Properties
//all datatypes have access to specific properties, 
//for instance every string has the properties of the length
console.log('Teaching the world how to code'.length)
//JavaScript Methods
// Use .toUpperCase() to log 'Codecademy' in all uppercase letters
console.log('Codecademy');

// Use a string method to log the following string without whitespace at the beginning and end of it.
console.log('    Remove whitespace   ');
console.log('Codecademy'.toUpperCase())
console.log(' Remove whitespace '.trim())


//Built in Objects in Javascript

//Built in Objects

console.log(Math.random() * 100)//in this case it selects the random number between the 0 and the 100

console.log(Math.floor(Math.random() * 100))// math.floor helps to round up the number

console.log(Math.ceil(43.8))// this will help to returns the small integer greater than or equal to a decimal number

console.log(Number.isInteger(2017))//check if the given number is integer or not


//Usage of var keyword in JS
//Variables in JS
var favoriteFood = 'pizza'
var numOfSlices = 8
console.log(favoriteFood)
console.log(numOfSlices)

//usage of let keyword in JS
//let keyword signals that the variable can be reassigned a different value
let changeMe = true;
changeMe = false
console.log(changeMe)

//Usage of the const keyword
const entree = 'Enchiladas'
console.log(entree)



// Usage of the mathematical operators with the variable let
let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// Use the mathematical assignments in the space below:
levelUp += 5
powerLevel -= 100
multiplyMe *= 11
quarterMe /= 4

console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);

//String interpolation
//String Interpolation

let myName = "Prekshya"
let myCity = 'Kathmandu'
console.log(`My name is  ${myName}. My favorite city is   ${myCity}`)


let newVariable = 'Playing around with typeof.';
console.log(typeof(newVariable))
newVariable = 1
console.log(typeof(newVariable))




//Comparison Operators

let hungerLevel = 7
if(hungerLevel > 7){
  console.log('Time to eat!')
}else{
  console.log('We can eat later!')
}

//Logical Operators
let mood = 'sleepy';
let tirednessLevel = 6;
if(mood === 'sleepy' && tirednessLevel > 8){
  console.log('time to sleep')
}else{
  console.log('not bed time yet')
}



//Arrays in JS
// let names = [1, 3, 4 , 'Prekshya', undefined]
// console.log(names)

// array can be made by uysing the new as well
let names = new Array( 3, 4 , 2, 'Prekshya', undefined)
names.push('this is pushed') //pushed method is used to push the element at the alst of the array
console.log(names)
console.log(names.length)
console.log(names.sort()) //this method is used to sort th array



// object in JS
// key value pairs
let employee = {
    name: 'Prekshya',
    age: 20,
    job: 'trainee'
}
console.log(employee.job)
console.log(employee ['age'])
// objects are accesed throught the dot operator 


// if i want to make the elements wiht certain numbers
// but it will have the empty
let bajra = new Array(23)
console.log(bajra)


// Call back hell

console.log('demo1')
setTimeout(function(){
    console.log('This function will execute later');
}, 3000);

console.log('demo2')
console.log('demo3')

//example of hte callback
function getCheese(callback) {
    setTimeout(() => {
        const cheese = '🧀';
        console.log('here is cheese', cheese);
        callback(cheese);
    }, 2000);
}


function makeDough(cheese, callback){
    setTimeout(()=>{
        const dough = cheese + '🍩'
        console.log('here is the dough', dough)
        callback(dough)
    })
}

getCheese((cheese) => {
    console.log('got the cheese:', cheese);
    makeDough(cheese, (dough) => {
        console.log('got the dough:', dough);
    });
});



// Assignment
// the concat concatenates the two or more array and then return sthe new array
const array1 = [1,2,3,4,5];
const array2 = [5,6,7,8,8];
console.log(array1.concat(array2));


// Etries
const arr = [1,2,3]
const iterator = arr.entries()

for(let entry of iterator){
    console.log(entry)
}

// every
const array = [1, 2, 18, 19, 30, 45]
const allover18 = array.every(()=>{
    return array > 18
})
console.log(allover18)


// fill
// it takes three value, fill(value, start , end)
// end is the stop index, and will not be applied
const a = [1,2,3,4,5]
const filling = a.fill(10, 0,3)
console.log(filling)



// filter
const b = [ 13 , 2 , 14 , 16, 18 , 19]
const answer = b.filter((b)=>{
    return b % 2 === 0
})
console.log(answer)


// find
const c = [5, 12, 8, 130]
const foundElement = c.find((c)=>{
    return c > 12
})
console.log(foundElement)


const e = [1, 3, 5, 130];
const findIndex = e.findIndex((element) => {
    return element >= 130;
});
console.log(findIndex); 



//forEach
//this will execute the function once for each element
const f = ['a', 'b', 'c']
f.forEach((element)=>{
    console.log(element)
})

//incluudes
const includearray = [1,2,3,4,5]
const g = [1, 2, 3]
const h = [1, 2,3,4,5]
includesTwo = g.includes(2)

console.log(includesTwo)

//indexOf()
//it will return the first index at which a given element can be found in an array orelse -1

const i = [5,6,7,8]
const indexoffive = i.indexOf(5)
console.log(indexoffive)

//is Array
//checks if the value is an array
const j =" [1,2,3, 'hello']"
console.log(Array.isArray(j))


//join operator
//it will join all the elements in array into a string
const k = ['1','apple', 'banaana']
console.log(k.join(''), ",")


// keys()
//it gives the new array  taht containes teh keys for each element in array



//lastindex of
//this returs the value of hte occureence of hte last index
const l = [1,2,3,5,6,2]
console.log(l.lastIndexOf(2))

// map
// tit will create a new array with the results of the condition on every element in the calling array
const m = [2,3,4]
console.log(m.map((element)=>{
    return element*2
}))


// pop
// it will return teh alst element from the array and will return that element
const n = [1,2,4,5,6]
console.log(n.pop())


// it will add the new element to an aaray at the last
const o = [1,4,5,6]
console.log(o.push('Prekshya'))



// reduce function
// it will execute he reducer function on each element on hte array and will return a sinlg eoutput value

let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log(sum); // 10




// REVERSE
//this is used to reverse the array
const p = [2,4,5,6]
console.log(p.reverse())


// shift
// this si used to remove the first element of hte array and return that element
const q = [1,2,4]
console.log(q.shift())


// slice
const r = [1,2,3, 3,5,5];
console.log(r.slice(0,2), 'slice')
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]



// unshift
// this will put the element in the first in the array
let s = [2,4,5,6]
s.unshift('prekshya')
console.log(s)
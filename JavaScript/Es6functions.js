const sayHello = (name) => {
    console.log('hello wworld' + name)
}
const sayhelloagain = () => console.log('say hello again')
sayHello('prekshya')
sayhelloagain()

// if we use the normal function . this will refer to the window object
// when we use the arrow function, we dont need to iuse the this keyword
const x = {
    name: 'prekshya',
    age: 20,
    show: function () {
        setTimeout(() => {
            console.log(this)
            console.log(`the name is ${this.name} \n . the age is ${this.age}`)
        }, 2000)
    }
}

x.show()
// arrow functions do not create their own this binding
const a = {
    job: 'trainee',
    vacancy: ".net",
    isFunction: function () {
        console.log(this)
        const print2 = () => {
            console.log(`this is a demo ${this.vacancy}`)
        }

    }
}

a.isFunction()
// a.print2()
const obj = {
    name: 'deeecode',
    age: 200,
    print: function print2() {
          const print2 = () => {
            console.log(this)
          }

    }
}

obj.print()

// arrow functions cannot be used as constructors
class Animal {
    constructor(name, numOfLegs) {
        this.name = name
        this.numOfLegs = numOfLegs
    }

    sayName() {
        console.log(`My name is ${this.name}`)
    }

    sayName = () => {
        console.log(`My name is ${this.name}, arrowfunction`)
    }
}

const Dog = new Animal("Bingo", 4)
const Bird = new Animal("Steer", 2)

Dog.sayName()
// My name is Bingo

Bird.sayName()
// My name is Steer


class Fruits {
    constructor (name, numbers){
        this.name = name,
        this.numbers = numbers
    }
    sayFruits =()=>{
        console.log(`the name of the fruit is ${this.name}`)
    }
}

const fruits = new Fruits('Orange', 12)
fruits.sayFruits()

const demoFunction = () => {
    console.log('demofunction')
}

console.log(demoFunction())


function print() {
    console.log(arguments)
}

print('prekshya', 200, 200, 4000)

// const print1 = () => {
//     console.log(arguments)
// }
// print1(1, 1, 1)

// Destructuring in JS
let arr = [3,4, 8, 10, 11]
let [p,q, r, ...rest] = arr
console.log(p,q,r)
console.log(rest)

// there is  an array. i can make it as a object
let hello1 = [1,2,3]
let hello2 = [4, 5,6]
let obj1 ={...hello1, ...hello2}
console.log(obj1, 'hello1')
let hello3 = [...hello1, hello2]
console.log(hello3, 'hello3')


// if we want to pass the arguments to the function which alaso has the same number of parameters as in array we can use the spread operator
function sum(v1, v2, v3){
    return v1, v2, v3
}

console.log(sum(...arr))

// when we want to make the changes in the object we can use the spread oeprator
// overwrite can also be done
// these are used when we want certain object with some changes
let obj2 = {
    name: 'Harry',
    company: 'Company xyz',
    address: 'XYZ'
}

let obj3 = {
    obj_name: 'Sijan',
    address: 'Australia'
}
console.log({...obj2, ...obj3, address : 'korea'})

console.log({...obj2, name: 'Prekshya' , address: 'Gairigaun'})
// waht we want to overwrite we have to put it in first

// destructuring in obj
let object = {z: 1, b:2};
let {z, b}  = object;
console.log(z)
console.log(b)

const employee = {
    name: 'Prekshay',
    age: 30,
    address: {
      city: 'New York',
      zip: '10001'
    }
  };
  
  // Destructuring nested objects
  const { name, address: { city } } = employee;
  
  console.log(name); 
  console.log(city); 
  

  const abc = [1,2,3];
  const object5 = {...abc}
  console.log(object5)
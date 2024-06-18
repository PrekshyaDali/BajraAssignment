// learn about hte spread operator
let a = [1, 2,3]
let b = [3,4.5]
const c = {...a, ...b}
console.log(c, "c")

// spread operator is used to merge the objects into the singe object
const d = {
    x : 1,
    y: 2,
    z: 3
}
const e = {
    m: 5,
    n: 6,
    o:7
}
const obj = {...d, ...e}
console.log(obj)

// it is used to make the shallow copy of hte object
const f = {
    hello: "hello",
    hi: "hi"
}

const obj1 = {...f}
console.log(obj1)

// also to make the shallow copy of the array
const g = [4,5,6]
const h = [...g]
console.log(h)

// it is also used to pass the arguments in the function
function print(a, b, c){
    return a*b*c
}

console.log(print(...g))

const str = 'PREKSHYA'
const str1 = {...str}
console.log(str1)

// strict equality in js
// in strict equality ==== checks the value and hte type whereas the == will only check the value

// reduce method
const reduce1 = [1,2,3,4,5]
const sum = reduce1.reduce((acc, curr)=> acc + curr, 0)
console.log(sum, 'sum')

// another example of the reduce
const reduce2 = [5,6,7,8,9]
const multipluy = reduce2.reduce((acc, curr)=> acc * curr, 0)
console.log(multipluy)

// splice method 
const splice1 = ['orange', 'apple', 'strawberry', 'hello', 'kiwi']
console.log(splice1.splice(1, 1))


// rest operator
const rest1 = {
    a: 'hello',
    b: 'hello2',
    c: "hello3",
    d: 'hello4'
}

const {a, b, ...rest} =rest1
console.log(rest)


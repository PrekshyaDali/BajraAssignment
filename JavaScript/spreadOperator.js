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

const objOne = {...f}
console.log(objOne)

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
const strOne = {...str}
console.log(strOne)

/* strict equality in js
in strict equality === checks the value and the type whereas the == will only check the value */ 

// reduce method
const reduceOne = [1,2,3,4,5]
const sum = reduceOne.reduce((acc, curr)=> acc + curr, 0)
console.log(sum, 'sum')

// another example of the reduce
const reduceTwo = [5,6,7,8,9]
const multipluy = reduceTwo.reduce((acc, curr)=> acc * curr, 0)
console.log(multipluy)

// splice method 
const splice1 = ['orange', 'apple', 'strawberry', 'hello', 'kiwi']
console.log(splice1.splice(1, 1))

// rest operator
const restOne = {
    a: 'hello',
    b: 'hello2',
    c: "hello3",
    d: 'hello4'
}

const {a, b, ...rest} =restOne
console.log(rest)
console.log("\n")

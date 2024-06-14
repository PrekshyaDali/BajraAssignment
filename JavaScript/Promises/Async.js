// let promise = new Promise(function (resolve, reject) {
//     alert(' hello ')
//     resolve(56)

// })


console.log('hello1')
setTimeout(() => {
    console.log("hello in settimeout")
}, 2000)
console.log("hello2")
console.log(promise)
// promise has two objects, state result

let promise = new Promise(function (resolve, reject) {
    console.log('Promise is pending')
    setTimeout(() => {
        console.log('I am a promise and I am fulfilled')
        resolve(true)

    }, 3000)
})

let promise1 = new Promise(function (resolve, reject) {
    console.log('Promise is pending')
    setTimeout(() => {
        console.log('I am a promise and I am rejected')
        // resolve(true)
        reject(new Error(('I am an error')))
    }, 3000)
})

// console.log(promise, promise1)
// // to get the value
promise.then((value) => {
    console.log(value)
}, (error) => {
    console.log(error, "The error occured in promise1")

})

// to catch the error
promise1.catch((error) => {
    console.log("The error occured in promise1")
})



// nesting of the promise
let promisenew = new Promise((resolve, reject) => {
    console.log("this is promise newe");
    setTimeout(() => {
        console.log("this is for the nesting promise")
        resolve(true)
    }, 3000)
})

promisenew.then((value) => {
    console.log(value)
    let promisenew2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promisenew 2")

        }, 2000)
    })
    return promisenew2

}).then((value) => {
    console.log("this indicates promise 2 is done")
}).then((value) => {
    console.log(
        "we are pakka done"
    )
})


// when async is removed it will not be a function, it wont return a promise
async function Prekshya() {
    let kathmanduweather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("34 degree celcius")
        }, 2000)
    })

    let pokharaweather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("20 degree celcius")
        }, 5000)
    })
    // kathmanduweather.then(alert)
    console.log('fetching kathmandu weather please wait')
    let kathmanduw = await kathmanduweather;
    console.log('fetching pokhara weather please wait' + kathmanduw)
    let pokharaw = await pokharaweather;
    console.log('fetching weather is' + pokharaw)
    return (kathmanduw, pokharaw)
}
const cherry = async () => {
    console.log('i am cherry and i am not waiting')
}

const main = async () => {
    console.log('welcome to weather control room')
    let mm = await Prekshya()
    let nn = await cherry()

}
main()


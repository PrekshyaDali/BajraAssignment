let headingTwo = document.querySelector("h2")
console.dir(headingTwo)
// to hange the text can do 
headingTwo.innerText =  headingTwo.innerText + 'from Apna College Students'
console.log(headingTwo)

let divs = document.getElementsByClassName("box")
console.dir(divs)
console.log(divs)

divs.innerText = '<p>this is the new text i am adding</p>'
let button = document.createElement('button')
button.innerText = "clickme!"
let nodediv = document.querySelector(".node-div")
//at the front of the div
nodediv.prepend("button")
//at the alst of the div
nodediv.append("button")
//just before the node addition
nodediv.before("button") 
//just after the node
nodediv.after("button")
/* console.dir(button, "button")
console.log(button, "button")
read about the append child and the remove child */

// creating a button element
let button = document.createElement('button')
button.innerText = "click me!"
button.style.backgroundColor = 'red'
button.style.color = 'white'
console.log(button)

let body = document.querySelector('body')
body.prepend(button)
button.addEventListener('click', (evt) => {
    console.log('button is clicked -handler1')
})
button.addEventListener('click', (evt) => {
    console.log('button is clicked -handler2')
})
const handlerThree =()=>{
    console.log('button is clicked -handler3')
} 
button.addEventListener('click', handlerThree)
button.addEventListener('click', (evt) => {
    console.log('button is clicked -handler4')
})

// to remove the event listener
button.removeEventListener('click', handlerThree)
button.addEventListener('dblclick', () => {
    console.log('button is clicked twice')
})

// create a p tag in html
let p = document.querySelector('.p-tag')
console.log(p)
// p.setAttribute('class', 'newClass')
p.classList.add('newClass')
p.classList.remove('newClass')
/* set attribute willoverwrite the classes
instead we will use the classList
if we dont want to completely getrid of the previous class */ 

let modebtn = document.querySelector('#mode')
let currMode = 'Light'
modebtn.addEventListener('click', () => {
    console.log('toggle button is clicked')
    if (currMode === 'Light') {
        document.querySelector('body').style.backgroundColor = 'black'
        currMode = 'dark'
        console.log(currMode, "pre")
    }
    else {
        currMode === 'dark'
        document.querySelector('body').style.backgroundColor = 'white'
        currMode = 'Light'
        console.log(currMode, "prekshya")
    }
    console.log(currMode)
})






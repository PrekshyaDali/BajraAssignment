let div = document.getElementById('div')
console.dir(div)
console.log(div)

console.log(div.textContent, 'textContent')
// this will add the text to the div
div.innerText = 'Prekshya'
div.innerHTML = "<p>This is a p tag demo of innerHTML</p>"
console.log(div)

let classname = document.getElementsByClassName('classname')
console.log(classname)
console.dir(classname)
classname.style.background = 'red'

// to extract the text label of a button
let labelchange = document.getElementById('labelchange');
console.log(labelchange.innerText, 'innerText')

// Creating a new child element 
let newElement = document.createElement('button')
newElement.innerText = "NewElement button"
let container = document.querySelector('.newElementContainer')
container.prepend(newElement)
console.log(container.innerHTML, 'container')

// replacing the child element with the new child element
container.innerHTML = '<p>this is the replace child element</p>'
console.log(container)
// we can use the replaceChild method as well to replace the child

//Select the element by id
let p = document.getElementById('p-tag')
p.style.color = 'blue'

// select the element with the tagname
let tagname = document.getElementsByTagName("p")
for (let i = 0; i < tagname.length; i++) {
    tagname[i].style.fontStyle = "italic";
}

//select the element by name
let nameOne = document.getElementsByName('email')[0];
// Checking if nameOne exists before manipulating it
if (nameOne) {
    nameOne.style.backgroundColor = 'lightblue';
    // Changing the input type to 'password' 
    nameOne.setAttribute('type', 'password');
}

// selecting the element with the tag name
let span = document.querySelector('span')
console.dir(span)
span.style.fontWeight = 'bold'

// DOM navigation
let navigation = document.querySelector('#navigation')
let firstElement = navigation.firstElementChild
console.log(firstElement.innerText)

// HTML forms
function handleSubmit(event) {
    event.preventDefault()
    let username = document.forms['myForm']['fname'].value;
    let password = document.forms['myForm']['fpassword'].value;
    if (username === '' || password === '') {
        alert('All fields are required')
        return false;
    }
    console.log(`this is the ${username} and this is the ${password}`)
}

// event listener and events in JS
let modebtn = document.querySelector('#mode');
let currMode = 'Light'; 
modebtn.addEventListener('click', () => {
    console.log('toggle button is clicked');
    let body = document.querySelector('body');
    if (currMode === 'Light') {
        body.classList.add('darkmode');
        body.classList.remove('lightmode');
        currMode = 'dark'; 
        console.log(currMode);
    } else {
        // currMode === 'dark'
        body.classList.add('lightmode');
        body.classList.remove('darkmode');
        currMode = 'Light'; 
        console.log(currMode);
    }
});

// let doubleclick = document.querySelector('#doubleclick')
// console.log(doubleclick)
// doubleclick.addEventListener('dblclick', ()=>{
//     console.log('you have successfully clicked the button twice')
//     alert('Double clicked');
// })

let buttonTwo = document.querySelector('.check')
let check = buttonTwo.textContent
console.log(check)
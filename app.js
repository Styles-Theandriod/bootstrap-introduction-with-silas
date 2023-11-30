// console.log("Staring Javascript...")

// // let const var 

// // let console = require('console');

// let Name = 'Emmanuel'
// Name =  'Onyekachi'

// const Age = 50
// console.log(Name);

// var speed = 200
// var speed = 400
// console.log(speed);

// // let text = document.getElementById('myText')
// // text.innerHTML = 'Hello world'

// let num = 10
// // num = num + 5
// num += 5

// console.log(num);

// console.log('apples' != 'apples')


// // JavaScript has 8 Datatypes
// // 1. String
// // 2. Number
// // 3. Bigint
// // 4. Boolean
// // 5. Undefined

// let u;
// u = 'emeka'
// // 6. Null
// // 7. Symbol
// // 8. Object

// // The Object Datatype
// // The object data type can contain:

// // 1. An object
// // 2. An array
// // 3. A date

// list = {
    
// }

// let newCar = undefined;
// console.log(newCar);

// let isPlaying = false;
// isPlaying = true




// let char = 16 + 4
// console.log(char);

// let crush = true 
// let notCrush = false

// // console.log(crush === notCrush);
// console.log(crush != notCrush);

// let value = 20

// console.log(--value);
// // console.log(value--);


// let car = ['benz', 'camery', ' jamialy', 'emily', 'fiends']
// console.log(typeof(car));

let person = {Name:'john doe', Gender:'male', Age:50, Address:'123 Main St ogbpono lugbe abuja'}
// console.log(typeof(person));
// console.log(person.Gender);


// // a function is a block of code that does something in javscript
// // let count = 0;
// // let color = ['yellow', 'green', 'orange', 'blue', 'red'];
// // let hex = '0 123 456789abcdef'
// // let countValue = document.getElementById('count');


// // function getRandomColor() {
// //     // Generate a random hex color code
// //     return '#' + Math.floor(Math.random()*16777215).toString(16);
// // }

// // function increase() {
// //     countValue.innerHTML = count++;

// //     // Use modulo to cycle through colors
// //     // let colorIndex = count % color.length;
// //     // countValue.style.color = color[colorIndex];
// //     countValue.style.color = getRandomColor()
// // }

// // function decrease() {
// //     countValue.innerHTML = count--;

// //     // Use modulo to cycle through colors
// //     // let colorIndex = count % color.length;
// //     // countValue.style.color = color[colorIndex];
// //     countValue.style.color = getRandomColor()
// // }


// let count = 0
// let countValue = document.getElementById('count')
// let color = ['yellow', 'blue', 'green', 'orange', 'purple']


// function getRandomColor(){
//     // Generate a random hex color codes 
//     return '#' + Math.floor(Math.random() * 16777215).toString(16)
// }

// function increment(){
//     count++
//     countValue.innerHTML = count  
//     // countValue.style.color = color[0]
//     // use the modulus to cycle through the colors 
//     let colorIndex = count % color.length
//     // countValue.style.color = color[colorIndex]
//     countValue.style.color = getRandomColor()
//     countValue.style.fontSize = '50px'
// }


// function decrement(){
//     count--
//     countValue.innerHTML = count 
//      // use the modulus to cycle through the colors 
//      let colorIndex = count % color.length
//      countValue.style.color = color[colorIndex]
//     // countValue.style.color = getRandomColor()
// }


// function myFunction(p1, p2){
//     return (p1 + p2);

//     let color = 50;
//     console.log(color);
// }

// console.log(myFunction(5, 5))


// let pass = document.querySelector('.form-control');
// let email = document.querySelector('.emailInput');

// // if else if else  switch  tenary operator 

// function submitBtn(){
//     if(pass == null || email == null){
//         pass.classList.add('border-2 border-danger')
//     }
// }




// document.addEventListener('DOMContentLoaded', () => {
//     const socket = io();
//     const form = document.querySelector('form');
//     const input = document.querySelector('#messageInput');
//     const messages = document.querySelector('#messages');
  
//     form.addEventListener('submit', (e) => {
//       e.preventDefault();
//       if (input.value) {
//         socket.emit('chat message', input.value);
//         input.value = '';
//       }
//     });
  
//     socket.on('chat message', (msg) => {
//       const li = document.createElement('li');
//       li.textContent = msg;
//       messages.appendChild(li);
//     });
//   });


function myFunction(text, msg){
  console.log(text, msg);
}


myFunction('hello mr function', 'this is a friendly message');


// Logical statement in javascript 
// if else if else switch tenary 

let error_msg = document.getElementById('error_msg');
let inputName = document.getElementById('inputName');
let inputPassword = document.getElementById('inputPassword');
let confirm_password = document.getElementById('inputConfirm-Password');
let submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', function (e) {
  e.preventDefault();

  // Remove spaces from input values
  const nameValue = inputName.value.trim();
  const passwordValue = inputPassword.value.trim();
  const confirmValue = confirm_password.value.trim();

  // Display an error message if any field is empty
  if (nameValue === '' || passwordValue === '' || confirmValue === '') {
    error_msg.innerHTML = 'Please fill out all fields.';
    error_msg.style.display = 'block';

    // Hide the error message after 1 second
    setTimeout(() => {
      error_msg.style.display = 'none';
    }, 1000);
  } else if (passwordValue != confirmValue) {
    // Display success message after a delay
    error_msg.innerHTML = 'Password does not match';
    error_msg.style.display = 'block';

    // Hide the success message after 1 second
    setTimeout(() => {
      error_msg.style.display = 'none';
    }, 1000);
  }else{
    error_msg.innerHTML = 'Submitted successfully ';
    error_msg.style.display = 'block';
  }
});

    

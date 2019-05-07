// * [X] `mouseover`
// * [X] `keydown`
// * [X] `wheel`
// * [ ] `drag / drop`
// * [ ] `load`
// * [ ] `focus`
// * [ ] `resize`
// * [ ] `scroll`
// * [ ] `select`
// * [X] `dblclick`

// const lambdaBtn = document.querySelector('.lambda-button');
// console.log(lambdaBtn);
// lambdaBtn.addEventListener('click', function(event) {
//   console.log('Work With Us clicked!');
//   servicesHeader.textContent = 'Hello World';
//   console.log(event);
// });// Your code goes here


// mouseover event
const headerHover = document.querySelector('nav');

console.log(headerHover);

headerHover.addEventListener('mouseover', (event) => {
    event.target.style.color = 'red';
});

// click event

const headerClick = document.querySelector('.main-navigation');
// console.log(headerClick);

headerClick.addEventListener('click', (event) => {
    event.target.style.background = 'green';
}, true);

// double click event
headerClick.addEventListener('dblclick', (event) => {
    event.target.style.background = '';
});

// create a new HTML with ID for interaction
let newDiv = document.createElement("NewHTML");
newDiv.setAttribute("id", "madeUpDiv");
newDiv.style.fontSize = '40px';
newDiv.style.color = 'red';
newDiv.innerHTML = "Click here and type something to see your keystrokes logged!";
document.body.append(newDiv);
console.log(newDiv);

// keydown event
const keyDown = document.addEventListener('keydown', interrogateKey);

function interrogateKey(event){
    newDiv.innerHTML += `${event.code}`; 
};

// Update and add an ID to the intro header to interact with 

function updateIntroHeader() {
    document.getElementsByTagName("h2")[0].setAttribute('id', 'funBusFirstHeader');
};

updateIntroHeader();


// make a form?  Referenced https://stackoverflow.com/questions/3991204/how-to-create-a-form-dynamically-using-javascript

// let formField 
// let formFieldTwo

// funBus_form=document.createElement('FORM');
// funBus_form.name='funBusForm';
// funBus_form.method='POST';
// funBus_form.action='http://www.google.com';

// formField=document.createElement('INPUT');
// formField.type='TEXT';
// formField.name='funBusInput';
// formField.value='Text For The Form';
// formField.appendChild(formFieldTwo);

// formFieldTwo=document.createElement('INPUT');
// formFieldTwo.type='TEXT';
// formFieldTwo.name='funBusInputTwo';
// formFieldTwo.value='Text for The 2nd Field of the Form';
// formField.appendChild(formField);
// document.body.appendChild(funBus_form);
// funBus_form.submit();

// wheel event
const elementForWheel = document.getElementById('funBusFirstHeader');

function scrolling(event) {
    event.preventDefault();
  
    if (event.deltaY < 0) {
      // scroll in
      funBusFirstHeader.textContent = `You're scrolling in!`;
    }
    else {
      // scroll out
      funBusFirstHeader.textContent = `You're scrolling out!!`;
    }
  };
  
// scrolling

  window.addEventListener('scroll', function() {
    alert('they see me scrolling...they hatin...');
});

// Wheeling
// window.addEventListener('wheel', function() {
//     alert('Do you want to build a snowman!');
// });

let textContentH2 = document.querySelector('h2');
textContentH2.addEventListener('wheel', (event) => {
    event.target.style.backgroundColor = 'dodgerblue';
});
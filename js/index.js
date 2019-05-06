// * [X] `mouseover`
// * [ ] `keydown`
// * [ ] `wheel`
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

// set an ID on the header text
let newDiv = document.createElement("NewHTML");
newDiv.setAttribute("id", "madeUpDiv");
newDiv.innerHTML = "Heres some sample text for selection";
document.body.append(newDiv);
console.log(newDiv);

function logSelection(event) {
    const log = document.getElementsById('madeUpDiv');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log.textContent = `You selected: ${selection}`;
}
const update = document.querySelector('madeUpDiv');
update.addEventListener('select', logSelection);

function updateIntroHeader() {
    document.getElementsByTagName("h2")[0].setAttribute('id', 'funBusFirstHeader');
};

// log

updateIntroHeader();






// function funBusSelection(event) {
// console.log(servicesHeader);

//     const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
//     logoItem.document = alert(`You selected: ${selection}`);
// }



// password.addEventListener('focus', (event) => {
//   event.target.style.background = 'pink';    
// });

// password.addEventListener('blur', (event) => {
//   event.target.style.background = '';    
// });
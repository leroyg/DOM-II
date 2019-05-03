// * [ ] `mouseover`
// * [ ] `keydown`
// * [ ] `wheel`
// * [ ] `drag / drop`
// * [ ] `load`
// * [X] `focus`
// * [ ] `resize`
// * [ ] `scroll`
// * [ ] `select`
// * [ ] `dblclick`

// const lambdaBtn = document.querySelector('.lambda-button');
// console.log(lambdaBtn);
// lambdaBtn.addEventListener('click', function(event) {
//   console.log('Work With Us clicked!');
//   servicesHeader.textContent = 'Hello World';
//   console.log(event);
// });// Your code goes here

const headerHover = document.querySelector('nav');

console.log(headerHover);

headerHover.addEventListener('mouseover', (event) => {
    event.target.style.color = 'red';
});

// headerHover.addEventListener('focus', (event) => {
//     event.target.style.color = 'grey';
// });


// const password = document.querySelector('input[type="password"]');

// password.addEventListener('focus', (event) => {
//   event.target.style.background = 'pink';    
// });

// password.addEventListener('blur', (event) => {
//   event.target.style.background = '';    
// });
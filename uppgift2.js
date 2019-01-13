/* hämta containerna, detta är rekommenderat */
let container = document.querySelector('.container');
let buttons = document.querySelectorAll('button');

/* loopa igenom knapparna */
for (let button of buttons){
  button.addEventListener('click', function(e) {
/* sätter color på knapparna */
  let color = e.target.className;
  container.style.backgroundColor = color;

  })
}


/* vet inte om detta var rätt*/
let buttonRed = document.getElementsByClassName('red');

buttonRed.addEventListener ('click' function() {
  container.style.backgroundColor = 'red';
})

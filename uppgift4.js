/* Implement your solution here */
/* hämtar datorn från servern nedan*/
getData()
.then(function(result){
  let data  = JASON.parse(result);

/* skapar ul för data jag hämtat*/
  let ul = document.createElement('ul');
  for (let row of data) {
    let li = document.createElement('li');
    li.textContent = row.name;
    ul.appendChild(li);
  }

  let main = document.querySelector('main');
  main.appendChild(ul);
});

/* Do NOT touch this function */
function getData() {
  return new Promise(function(resolve, reject) {
    resolve(JSON.stringify({
      data: [
        {name: 'Knatte'},
        {name: 'Fnatte'},
        {name: 'Tjatte'},
      ],
    }));
  });
}

/* Implement your solution here */
function renderTable(data){
  let main = document.querySelector('main');
  const columns = ['name', ' occupation', 'age']; /* istället för att göra 3 block, gör vi en loop av columns arrayn, den kommer vara name age sen occupation*/

  let table = document.createElement('table');
  let thead = document.createElement('thead');
  let headerRow = document.createElement('tr');

/* för varje värde skapar vi en th, och loopar igenom*/
  for (let column of columns) {
    let th = document.createElement('th');
    th.textContent = column;
    headerRow.appendChild(th);
  }

  thead.appendChild(headerRow)
  table.appendChild(th); /* skapar header raden*/


  let tbody = document.createElement('tbody');

  for (let row of data){          /* loopar igenom hela array*/
    let tr = document.createElement('tr');

    for(let column of columns){
      let td = document.createElement('tr');
      td.textContent = row[column];
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
  main.appendChild(table);
}
/* Do not touch anything below this line */
let data = [
  {name: 'Rachel Green', occupation: 'Waitress', age: 24},
  {name: 'Monica Geller', occupation: 'Chef', age: 24},
  {name: 'Phoebe Buffay', occupation: 'Massage therapist', age: 27},
  {name: 'Joey Tribbiani', occupation: 'Actor', age: 25},
  {name: 'Chandler Bing', occupation: 'Transponster?', age: 26},
  {name: 'Ross Geller', occupation: 'Paleontologist', age: 26},
];
renderTable(data);

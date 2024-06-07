/*
Write an interface named Student that accepts the following elements: firstName(string), lastName(string), age(number), and location(string)
Create two students, and create an array named studentsList containing the two variables
Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
Each row should contain the first name of the student and the location
*/

interface Student {firstName: string, lastName: string, age: number, location: string};


const stu2: Student = {firstName: 'bel', lastName: 'beso', age: 17, location: 'A.A'};
const stu1: Student = {firstName: 'Abel', lastName: 'Tibeso', age: 27, location: 'A.A'};


const studentsList: Student[] = [stu1, stu2];

function renderStudent(student: Student) {
     const body = document.getElementsByTagName('body')[0];
  const table = document.getElementById('table');
  if (!table) {
  const table = document.createElement('table');
  table.id = 'table';

  const thead = document.createElement('thead');
  const headFirstNameRow = document.createElement('th');
  headFirstNameRow.textContent = 'First Name';

  const headLocationRow = document.createElement('th');
  headLocationRow.textContent = "Location";

  thead.append(headFirstNameRow)
  thead.append(headLocationRow)

  table.append(thead);

  const trow = document.createElement('tr');
  const firstName = document.createElement('td');
  firstName.textContent = student.firstName;
  const location = document.createElement('td');
 location.textContent = student.location;
  trow.appendChild(firstName);
  trow.appendChild(location);
 
  const tbody = document.createElement('tbody');
  tbody.id = 'tbody'
  tbody.appendChild(trow);
  table.appendChild(tbody)
  body.appendChild(table);
  } else {
    const trow = document.createElement('tr');
    const firstName = document.createElement('td');
    firstName.textContent = student.firstName;  
    const location = document.createElement('td');
    location.textContent = student.location;

    trow.appendChild(firstName);
    trow.appendChild(location);

    const tbody = document.createElement('tbody');
    tbody.id = 'tbody'
    tbody.appendChild(trow);
    table.appendChild(tbody)
    body .appendChild(table);
  }
}

const heading = document.createElement('h1');

heading.textContent = 'This is typescript';
heading.style.textAlign = 'center';
document.body.append(heading);

  for (const stu of studentsList) {
    renderStudent(stu);
  }

// Path: alx-frontend-javascript/0x04-TypeScript/task_0/js/main.ts
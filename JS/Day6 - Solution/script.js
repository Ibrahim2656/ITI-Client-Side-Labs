const data = [
  { name: "Airi Satou", position: "Accountant", office: "Tokyo", age: 33, "start date": "2008-11-28" },
  { name: "Angelic Ramos", position: "Chief Executive Officer (CEO)", office: "London", age: 47, "start date": "2009-10-09" },
  { name: "Ashton Cox", position: "Junior Technical Author", office: "San Francisco", age: 66, "start date": "2009-01-12" },    
  { name: "Bradley Greer", position: "Software Engineer", office: "London", age: 41, "start date": "2012-10-13" },
  { name: "Brenden Wagrier", position: "Software Engineer", office: "San Francisco", age: 28, "start date": "2011-06-07" },
  { name: "Brielle Williamson", position: "Integration Speciallist", office: "New York", age: 61, "start date": "2012-12-02" },
  { name: "Bruno Nash", position: "Software Engineer", office: "London", age: 38, "start date": "2011-05-03" },    
  { name: "Caesar Vance", position: "Pre-Saies Support", office: "New York", age: 21, "start date": "2011-12-12" },
  { name: "Cara Stevens", position: "Sales Assistant", office: "New York", age: 46, "start date": "2011-12-06" },
  { name: "Cedric Kelly", position: "Senior Javascript Developer", office: "Edinburgh", age: 22, "start date": "2012-03-29" }
];

const tableHead = document.getElementById("table-head");
const tableBody = document.getElementById("table-body");

const sortDirections = {};

const keys = Object.keys(data[0]);
keys.forEach(key => {
  const th = document.createElement("th");
  th.innerHTML = `${key.toUpperCase()} <span class="arrow"></span>`;
  th.addEventListener("click", () => sortTable(key, th)); 
  tableHead.appendChild(th);
  sortDirections[key] = true; 
});

function renderTable(rows) {
  tableBody.innerHTML = "";
  rows.forEach(row => {
    const tr = document.createElement("tr");
    keys.forEach(key => {
      const td = document.createElement("td");
      td.textContent = row[key];
      tr.appendChild(td);
    });
    tableBody.appendChild(tr);
  });
}

function sortTable(column, thElement) {
  const direction = sortDirections[column] ? 1 : -1;

  const sortedData = [...data].sort((a, b) => {
    let valA = a[column];
    let valB = b[column];

    if (typeof valA === 'number' && typeof valB === 'number') {
      return (valA - valB) * direction;
    }

    if (Date.parse(valA) && Date.parse(valB)) {
      return (new Date(valA) - new Date(valB)) * direction;
    }

    valA = valA.toString().toLowerCase();
    valB = valB.toString().toLowerCase();
    if (valA < valB) return -1 * direction;
    if (valA > valB) return 1 * direction;
    return 0;
  });

  sortDirections[column] = !sortDirections[column]; 

  document.querySelectorAll(".arrow").forEach(span => span.textContent = "");
  thElement.querySelector(".arrow").textContent = sortDirections[column] ? "▲" : "▼";

  renderTable(sortedData);
}

renderTable(data);

let head = null;

function insertValue() {
  const input = document.getElementById("valueInput");
  const value = input.value.trim();
  if (!value) return;

  const newNode = { value: value, next: null };

  if (!head) {
    head = newNode;
  } else {
    let current = head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  input.value = "";
  renderList();
}

function popValue() {
  if (!head) return;

  if (!head.next) {
    head = null;
  } else {
    let current = head;
    let prev = null;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    prev.next = null;
  }

  renderList();
}

function insertAtBeginning() {
  const input = document.getElementById("valueInput");
  const value = input.value.trim();
  if (!value) return;

  const newNode = { value: value, next: head };
  head = newNode;

  input.value = "";
  renderList();
}

function removeFromBeginning() {
  if (!head) return;
  head = head.next;
  renderList();
}

function renderList() {
  const listDisplay = document.getElementById("listDisplay");
  listDisplay.innerHTML = "";

  let current = head;
  while (current) {
    const li = document.createElement("li");
    li.textContent = current.value;
    listDisplay.appendChild(li);
    current = current.next;
  }
}

renderList();



// Task 3
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.describe = function() {
  return this.name + " is " + this.age + " years old.";
};

function Employee(name, age, position) {
  Person.call(this, name, age);
  this.position = position;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.describeJob = function() {
  return this.describe() + " They work as a " + this.position + ".";
};

var emp = new Employee("John Doe", 30, "Software Engineer");
console.log(emp.describeJob());

var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var ToDos = [
  'Fazer café',
  'Estudar JavaScript',
  'Acessar comunidade da RocketSeat'
];

function renderToDos() {
  listElement.innerHTML = '';

  for (ToDo of ToDos) {
    var ToDoElement = document.createElement('li');
    var ToDoText = document.createTextNode(ToDo);
    ToDoElement.appendChild(ToDoText);
    listElement.appendChild(ToDoElement);
  }
}

renderToDos();

function addToDo() {
  ToDoText = inputElement.value;
  ToDos.push(ToDoText);
  inputElement.value = '';
  renderToDos();
}

buttonElement.onclick = addToDo;
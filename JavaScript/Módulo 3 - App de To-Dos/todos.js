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
    var ToDoText = document.createTextNode(ToDo + ' ');
    var linkElement = document.createElement('a');
    var linkText = document.createTextNode('Excluir');

    linkElement.setAttribute('href', '#');

    var pos = ToDos.indexOf(ToDo);
    linkElement.setAttribute('onclick', 'deleteToDo('+pos+')');

    ToDoElement.appendChild(ToDoText);
    listElement.appendChild(ToDoElement);
    linkElement.appendChild(linkText);
    ToDoElement.appendChild(linkElement);
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

function deleteToDo(pos) {
  ToDos.splice(pos, 1);
  renderToDos();
}
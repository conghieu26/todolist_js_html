let KEY = "key"

const manageTodo = new ManageTodo([]);

function deleteToDo(id) {
  manageTodo.removeTodoById(id);
  manageTodo.render();
}

function toggleTodoStatus(id) {
  manageTodo.toggleTodo(id);
  manageTodo.render()
}

function handleAddTodo() { 
  let valueEle = document.getElementById("newTask");
  let getValue = valueEle.value;

  if (getValue.trim().length == 0) {
    return;
  }
  let todo = new Todo(getValue);

  manageTodo.addTodo(todo);
  manageTodo.render();
  valueEle.value = "";
  valueEle.focus();
}


document.getElementById("addItem").onclick = handleAddTodo; 

window.onbeforeunload = () => {
  localStorage.setItem(KEY, JSON.stringify(manageTodo.value));
}

window.onload = () => {
  let content = localStorage.getItem(KEY)

    let arr = JSON.parse(content);
    manageTodo.update(arr);
    manageTodo.render();
}
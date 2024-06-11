const manageTodo = new ManageTodo([]);

function deleteToDo(id) {
  manageTodo.removeTodoById(id);
  manageTodo.render();
}

function handleAddTodo() { 
  let valueEle = document.getElementById("newTask");
  let getValue = valueEle.value;

  let todo = new Todo(getValue);

  manageTodo.addTodo(todo);

  manageTodo.render();
  console.log(manageTodo);
}


document.getElementById("addItem").onclick = handleAddTodo; 
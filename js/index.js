const manageTodo = new ManageTodo([]);

function handleAddTodo() { 
  let valueEle = document.getElementById("newTask");
  let getValue = valueEle.value;

  let todo = new Todo(getValue);

  manageTodo.addTodo(todo);

  manageTodo.render();
}


document.getElementById("addItem").onclick = handleAddTodo; 
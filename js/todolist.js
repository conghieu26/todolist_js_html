class ManageTodo {
  constructor(arr) {
    this.__arr = arr;
  }

  get value() {
    return this.__arr;
  }

  update(arr) {
    this.__arr = arr;
  }

  addTodo(todo) {
    this.value.unshift(todo);
  }

  removeTodoById(id) {
    var newArray = this.value.map((item) => {
      return item.id != id;
    });
    return (this.value = newArray);
  }
  render() {
    return (document.getElementById("todo").innerHTML = this.value.map(
      (item) => {
        return `
        <li>
        <span>${item.name}</span>
        <div class="buttons">
            <button class="remove" data-index="0" data-status="todo" onclick="deleteToDo(event)">
                <i class="fa fa-trash-alt"></i>
            </button>
            <button class="complete" data-index="0" data-status="todo" onclick="completeToDo(event)">
                <i class="far fa-check-circle"></i>
                <i class="fas fa-check-circle"></i>
            </button>
        </div>
    </li>
      `;
      }).join(" ")
    );
  }
}


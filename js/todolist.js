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
    return this.__arr.unshift(todo);
  }

  removeTodoById(id) {
    let newArray = this.value.filter((item) => {
      return item.id != id;
    });
    // console.log(newArray);

    this.__arr = newArray;

  }

  toggleTodo(id) {
    var value = this.value.find(item => { 
      return item.id == id;
    })
    value.toggleTodoStatus();
  }

  render() {
    this.renderDone();
    this.renderInProgress();
  }

  content(list) {
    return (list.map(
      (item) => {
        return `
        <li>
        <span>${item.name}</span>
        <div class="buttons">
            <button class="remove" data-index="0" data-status="todo" onclick="deleteToDo(${item.id})">
                <i class="fa fa-trash-alt"></i>
            </button>
            <button class="complete" data-index="0" data-status="todo" onclick="toggleTodoStatus(${item.id})">
                <i class="far fa-check-circle"></i>
                <i class="fas fa-check-circle"></i>
            </button>
        </div>
    </li>
      `;
      }).join(" ")
    );
  }
  findAllStatusDone() {
    return this.__arr.filter(todo => {
      return todo.status == STATUS.DONE
    })
  }

  findAllStatusInProgress() {
    return this.__arr.filter(todo => {
      return todo.status == STATUS.IN_PROGRESS;
    })
  }

  renderDone() {
   let todolist = this.findAllStatusDone();
  //  console.log(todolist)
   document.getElementById("completed").innerHTML = this.content(todolist);
  }

  renderInProgress() {
    let todolist = this.findAllStatusInProgress();
    //  console.log(todolist)
    document.getElementById("todo").innerHTML = this.content(todolist);

  }

}


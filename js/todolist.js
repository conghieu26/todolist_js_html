class ManageTodo {
  constructor(arr) { 
    this.__arr = arr
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
    var newArray = this.value.map(item => {
      return item.id != id;
    })
    return this.value = newArray;
  }
}
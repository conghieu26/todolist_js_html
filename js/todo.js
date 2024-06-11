let id = 1;

let STATUS = { 
  DONE: "done",
  IN_PROGRESS : "in-progress",
}

class Todo { 
  constructor(name) { 
    this.name = name; 
  
    this.__id = id; 

    id += 1;

    this.status =  STATUS.IN_PROGRESS;
  }

  get id() { 
    return this.__id;
  }

  toggleTodoStatus() {
    return this.status = this.isDone() ? STATUS.IN_PROGRESS : STATUS.DONE ;
  }

  isDone() { 
    return this.status == STATUS.DONE;
  }

  isInProgress() {
    return this.status == STATUS.IN_PROGRESS;
  }
}
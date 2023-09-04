import { AppState } from "../AppState.js"

export class ToDo {
  constructor(data) {
    this.id = data.id
    this.completed = data.completed
    this.creatorId = data.creatorId
    this.description = data.description
  }

  get ToDoList() {
    return `
      <div class="d-flex">
        ${this.Checkbox}
        <span class="glass rounded ms-2">${this.description}</span>
        ${this.deleteButton}
        <br>
      </div>
        `
  }
  get Checkbox() {
    if (this.completed) {
      return `<input type="checkbox" class="ms-2 glass rounded" checked onchange="app.ToDoController.checkItem('${this.id}')">`
    } else {
      return `<input type="checkbox" class="ms-2 glass rounded" onchange="app.ToDoController.checkItem('${this.id}')">`
    }
  }
  get deleteButton() {
    return `
    <button class="btn btn-danger" onclick="app.ToDoController.deleteItem('${this.id}')" > 🗑️</button>
    `
  }
  get numberToDo() {
    let leftToDo = 0
    let totalTasks = AppState.ToDoList.length
    let notCompleted = AppState.ToDoList.filter(item => item.completed)
    if (notCompleted.length >= leftToDo) {
      leftToDo += notCompleted.length
      return `<span class="glass rounded ms-2">${leftToDo}/${totalTasks} Completed</span>`
    }
  }
}
export class ToDo {
    constructor(data) {
        this.id = data.id
        this.completed = data.completed
        this.creatorId = data.creatorId
        this.description = data.description
    }

    get ToDoList() {
        return `
        <span class="bg-light ms-2">${this.description}</span>
        `
    }
    get ToDoForm() {
        return `
        <form onsubmit="app.ToDoController.createToDo(${this.id})">
        <div class="form-floating ms-2 col-2">
          <input required type="text" minLength="3" maxLength="20" class="form-control" id="ToDoName" name="Name"
            placeholder="ToDo Name">
          <label for="Name">What's on the list?</label>
        </div>
        <div>
          <button type="submit" class="ms-2 btn btn-info">Create ToDo</button>
        </div>
      </form>
        `
    }
}
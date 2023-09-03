import { AppState } from "../AppState.js";
import { toDoService } from "../services/ToDoService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawTodo() {
    let template = ''
    AppState.ToDoList.forEach(todo => template += todo.ToDoList)
    setHTML('ToDoList', template)
}

function _drawTasksToDo() {
    let template = ''
    AppState.ToDoList.find(todo => template += todo.numberToDo)
    setHTML('tasksLeft', template)

}

export class ToDoController {
    constructor() {
        AppState.on('account', this.getTodoList)
        AppState.on('ToDoList', _drawTodo)
        AppState.on('ToDoList', _drawTasksToDo)
    }

    async getTodoList() {
        try {
            await toDoService.getTodoList()
        } catch (error) {
            Pop.error(error)
        }
    }

    async createToDo() {
        try {
            window.event.preventDefault()
            const form = window.event.target
            const formData = getFormData(form)
            await toDoService.createToDo(formData)
            // @ts-ignore
            form.reset()
        } catch (error) {
            Pop.error(error)
        }
    }

    async checkItem(id) {
        try {
            await toDoService.checkItem(id)
        } catch (error) {
            Pop.error(error)
        }
    }

    async deleteItem(id) {
        try {
            if (await Pop.confirm('Are you sure you want to remove this item from the list???')) {
                toDoService.deleteItem(id)
            }

        } catch (error) {
            Pop.error(error)
        }
    }
}
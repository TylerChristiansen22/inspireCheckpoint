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

function _drawTodoForm() {
    let form = AppState.ToDoForm
    setHTML('ToDoListForm', form.ToDoForm)

}

export class ToDoController {
    constructor() {
        AppState.on('account', this.getTodoList)
        AppState.on('ToDoList', _drawTodo)
        AppState.on('account', _drawTodoForm)
    }

    async getTodoList() {
        try {
            await toDoService.getTodoList()
        } catch (error) {
            Pop.error(error)
        }
    }

    async createToDo(id) {
        try {
            window.event.preventDefault()
            const form = window.event.target
            const formData = getFormData(form)
            await toDoService.createToDo(formData, id)
            // @ts-ignore
            form.reset()
        } catch (error) {
            Pop.error(error)
        }
    }
}
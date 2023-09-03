import { AppState } from "../AppState.js"
import { ToDo } from "../models/ToDo.js"
import { api } from "./AxiosService.js"


class ToDoService {
    async getTodoList() {
        const response = await api.get('/api/todos')
        console.log(response.data)
        const mappedList = response.data.map(dataObj => new ToDo(dataObj))
        AppState.ToDoList = mappedList
    }
    async createToDo(formData) {
        const response = await api.post('/api/todos', formData)
        const newToDo = new ToDo(response.data)
        AppState.ToDoList.push(newToDo)
        AppState.emit('ToDoList')
    }
    async checkItem(id) {
        const selectedItem = AppState.ToDoList.find(item => item.id == id)
        selectedItem.completed = !selectedItem.completed
        const response = await api.put(`api/todos/${id}`, selectedItem)
        console.log(response.data)
        AppState.emit('ToDoList')
    }
    async deleteItem(id) {
        const response = await api.delete(`api/todos/${id}`)
        console.log(response.data)
        const filteredArray = AppState.ToDoList.filter(item => item.id != id)
        AppState.ToDoList = filteredArray
    }
}


export const toDoService = new ToDoService
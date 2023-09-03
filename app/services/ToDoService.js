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
    async createToDo(formData, id) {
        const response = await api.put(`/api/todos:${id}`, formData)
        const newToDo = new ToDo(response.data)

        AppState.ToDoList.push(newToDo)
        AppState.emit('ToDoList')

    }

}


export const toDoService = new ToDoService
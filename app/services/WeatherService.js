import { AppState } from "../AppState.js"
import { Weather } from "../models/Weather.js"
import { api } from "./AxiosService.js"



class WeatherService {
    async getWeather() {
        console.log('Getting weather')
        let response = await api.get('api/weather')
        console.log(response.data.weather.icon)
        AppState.weather = new Weather(response.data)
        console.log(AppState.weather)
    }

}


export const weatherService = new WeatherService
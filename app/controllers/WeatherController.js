import { AppState } from "../AppState.js";
import { weatherService } from "../services/WeatherService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


function _drawWeather() {
    let weather = AppState.weather
    if (AppState.isFahrenheit == true) {
        setHTML('weather', weather.WeatherTemplate)
    } else {
        setHTML('weather', weather.WeatherTemplate2)
    }
}

export class WeatherController {
    constructor() {
        this.getWeather()
        AppState.on('weather', _drawWeather)
        AppState.on('isFahrenheit', _drawWeather)
    }

    async getWeather() {
        try {
            await weatherService.getWeather()
        } catch (error) {
            Pop.error(error)
        }
    }
    toggle() {
        weatherService.toggle()
    }
}
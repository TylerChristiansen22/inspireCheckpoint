

export class Weather {
    constructor(data) {
        this.temp = (data.main.temp - 273.15) * (9 / 5) + 32
        this.icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    }

    get WeatherTemplate() {
        return `
        ${Math.floor(this.temp)} degrees Fahrenheit
        <br>
        <img src="${this.icon}" alt="Bad Image"/>
        `
    }
}

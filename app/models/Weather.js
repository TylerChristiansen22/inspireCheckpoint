

export class Weather {
    constructor(data) {
        this.fahrenheit = (data.main.temp - 273.15) * (9 / 5) + 32
        this.celsius = (data.main.temp - 273.15)
        this.icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    }

    get WeatherTemplate() {
        return `
        <div onclick="app.WeatherController.toggle()" class="glass rounded selectable">
        ${Math.floor(this.fahrenheit)}° Fahrenheit
        <br>
        <img src="${this.icon}" alt="Bad Image"/>
        </div>
        `
    }

    get WeatherTemplate2() {
        return `
        <div onclick="app.WeatherController.toggle()" class="glass rounded selectable">
        ${Math.floor(this.celsius)}° Celsius
        <br>
        <img src="${this.icon}" alt="Bad Image"/>
        </div>
        `
    }
}

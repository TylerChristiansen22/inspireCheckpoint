import { setHTML } from "../utils/Writer.js"


function _drawClock() {
    let time = new Date().toLocaleTimeString()
    setHTML('clock', time)

}

export class ClockController {
    constructor() {
        _drawClock()
        setInterval(_drawClock, 1000)
    }
}
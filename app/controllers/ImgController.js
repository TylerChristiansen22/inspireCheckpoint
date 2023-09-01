import { AppState } from "../AppState.js"
import { Img } from "../models/Img.js"
import { imgService } from "../services/ImgService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawImg() {
    let img = AppState.activeImg
    document.body.style.backgroundImage = `url(${img.url})`
    // setHTML('activeImg', img.ImgTemplate)
}

export class ImgController {
    constructor() {
        console.log('Hello from the Img Controller')
        this.getImg()
        AppState.on('activeImg', _drawImg)
    }


    async getImg() {
        try {
            await imgService.getImg()
        } catch (error) {
            Pop.error(error)
        }
    }
}
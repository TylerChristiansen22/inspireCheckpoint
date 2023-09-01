import { AppState } from "../AppState.js"
import { Img } from "../models/Img.js"
import { api } from "./AxiosService.js"


class ImgService {
    async getImg() {
        const response = await api.get('api/images')
        AppState.activeImg = new Img(response.data)
        console.log(AppState.activeImg)
    }
}

export const imgService = new ImgService
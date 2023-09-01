

export class Img {
    constructor(data) {
        this.tags = data.tags
        this.author = data.author
        this.query = data.query
        this.url = data.largeImgUrl
    }


    get ImgTemplate() {
        return `
            <img src="${this.url}" alt="Bad Source">
        `
    }
}
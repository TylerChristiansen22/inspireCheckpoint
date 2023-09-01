

export class Quote {
    constructor(data) {
        this.content = data.content
        this.author = data.author
    }


    get QuoteTemplate() {
        return `
        ${this.content}
        `
    }
    get AuthorTemplate() {
        return `
        --${this.author}
        `
    }
}
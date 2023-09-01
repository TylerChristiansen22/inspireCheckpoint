import { AppState } from "../AppState.js";
import { quoteService } from "../services/QuoteService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


function _drawQuote() {
    let quote = AppState.activeQuote
    setHTML('quote', quote.QuoteTemplate)
    let author = AppState.activeQuote
    setHTML('quoteAuthor', author.AuthorTemplate)
}

export class QuoteController {
    constructor() {
        this.getQuote()
        AppState.on('activeQuote', _drawQuote)
    }

    async getQuote() {
        try {
            await quoteService.getQuote()
        } catch (error) {
            Pop.error(error)
        }
    }
}
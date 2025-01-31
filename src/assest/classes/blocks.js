import { col, css, row } from "../../utilites"

class Block {
    constructor(type, value, option) {
        this.type = type
        this.value = value
        this.option = option
    }

    // В случае, если не вызван метод toHTML
    toHTML() {
        throw new Error("Method toHtml must realized");
    }
}

export class TitleBlock extends Block {
    constructor(value, option) {
        super('title', value, option); // инициализация прототипа из наследования
    }

    toHTML() {
        const {tag = 'h1', styles} = this.option
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
    }
    // P.S. параметр Block не существует, поэтому используем принцип this,
    // т.к. обращаемся к родительском классу Block
}

export class TextBlock extends Block {
    constructor(value, option) {
        super('text', value, option);
    }

    toHTML() {
        const {paragrahe = 'p', styles} = this.option
        return row(col(`<${paragrahe}>${this.value}</${paragrahe}>`), css(styles))
    }
}

export class DescriptionBlock extends Block {
    constructor(value, option) {
        super('description', value, option);
    }

    toHTML() {
        const {paragrahe = 'p', styles} = this.option
        const text = this.value.map(col).join("")
        return row(`<${paragrahe}>${text}</${paragrahe}>`, css(styles))
    }
}

export class ImageBlock extends Block {
    constructor(value, option) {
        super('image', value, option);
    }

    toHTML() {
        const {img = 'img', styles} = this.option
        return row(`<${img} src="${this.value}">`, css(styles))
    }
}
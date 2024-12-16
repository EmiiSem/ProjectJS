import {row, col, css} from '../../utilites'

function title(block) {
    const {tag = 'h1', styles} = block.option
    return row(col(`<${tag}>${block.value}</${tag}>`), css(styles))
}

function text(block) {
    const {paragrahe = 'p', styles} = block.option
    return row(col(`<${paragrahe}>${block.value}</${paragrahe}>`), css(styles))
}

function description(block) {
    const {paragrahe = 'p', styles} = block.option
    const text = block.value.map(col).join("")
    return row(`<${paragrahe}>${text}</${paragrahe}>`, css(styles))
}

function image(block) {
    const {img = 'img', styles} = block.option
    return row(`<${img} src="${block.value}">`, css(styles))
}

export const templates = {
    title,
    text,
    description,
    image
}
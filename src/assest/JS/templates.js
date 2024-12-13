import {row, col} from '../../utilites'

function title(block) {
    return row(col(`<h1>${block.value}</h1>`))
}

function text_text(block) {
    return row(col(`<p>${block.value}</p>`))
}

function description(block) {
    const text = block.value.map(col).join("")
    return row(`<p>${text}</p>`)
}

function image(block) {
    return row(`<img src="${block.value}">`)
}

export const templates = {
    title,
    text_text,
    description,
    image
}
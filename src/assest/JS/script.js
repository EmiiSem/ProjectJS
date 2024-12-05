import { modelArray } from "./model"
import * as templates from "./templates"
import "../CSS/style.css"

const $sit = document.querySelector('#sit')

modelArray.forEach(block => {
    // let text = ''
    // if(block.type === "title") {
    //     text = title(block)
    // } else if(block.type === "text") {
    //     text = text_text(block)
    // } else if(block.type === "description") {
    //     text = description(block)
    // } else if(block.type === "image") {
    //     text = image(block)
    // }
    const toHTML = templates[block.type]

    

    $sit.insertAdjacentHTML('beforeend', toHTML(block))
})
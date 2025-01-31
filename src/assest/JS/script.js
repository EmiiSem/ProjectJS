import { modelArray } from "./model"
import "../CSS/style.css"

const $sit = document.querySelector('#sit')

modelArray.forEach(block => {
    $sit.insertAdjacentHTML('beforeend', block.toHTML());
});
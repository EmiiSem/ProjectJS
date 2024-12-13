import { modelArray } from "./model"
import { templates } from "./templates";
import "../CSS/style.css"

const $sit = document.querySelector('#sit')

modelArray.forEach(block => {
    const toHTML = templates[block.type];

    if (typeof toHTML !== 'function') {
        // console.error(`No template function found for type: ${block.type}`); // Отладка
        // console.log(`Available templates:`, Object.keys(templates)); // Отладка
        return;
    }

    $sit.insertAdjacentHTML('beforeend', toHTML(block));
});
function title(block) {
    return `
     <div class="row">
        <div class="col-sm">
            <h1>${block.value}</h1>
        </div>
    </div>
    `
}

function text_text(block) {
    return `
    <div class="row">
        <div class="col-sm">
            <p>${block.value}</p>
        </div>
    </div>
    `
}

function description(block) {
    const text = block.value.map(item => `<div class="col-sm">${item}</div>`)
    return `
    <div class="row">
        ${text.join('')}
    </div>
    `
}

function image(block) {
    return `
    <div class="row"><img src="${block.value}"></div>
    `
}

// export { title, text_text, description, image }
export const templates = {
    title,
    text_text,
    description,
    image
}
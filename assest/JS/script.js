const modelArray = [
    {type: 'title', value: 'Hello World from JS'},
    {type: 'text', value: 'here we go with some text'},
    {type: 'description', value: [
        '11111111',
        '22222222',
        '33333333'
    ]},
    {type: 'image', value: 'assest/images/image.png'}
]

const $sit = document.querySelector('#sit')

modelArray.forEach(block => {
    let text = ''
    if(block.type === "title") {
        text = title(block)
    } else if(block.type === "text") {
        text = text_text(block)
    } else if(block.type === "description") {
        text = description(block)
    } else if(block.type === "image") {
        text = image(block)
    }

    $sit.insertAdjacentHTML('beforeend', text)
})

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
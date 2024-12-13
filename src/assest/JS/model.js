import image from '../images/image.png'

const modelArray = [
    {type: 'title', value: 'Hello World from JS', option: {
        tag: 'h2'
    }},
    {type: 'text', value: 'here we go with some text'},
    {type: 'description', value: [
        '11111111',
        '22222222',
        '33333333'
    ]},
    {type: 'image', value: image}
]

export { modelArray }
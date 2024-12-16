import image from '../images/image.png'

const modelArray = [
    {type: 'title', value: 'Website builder in pure JavaScript', option: {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #350431, #433240)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }},
    {type: 'text', value: 'This site was created for an informative purpose and to create certain functions', option: {
        styles: {
            'text-align': 'center',
            background: '#000',
            color: '#fff',
            padding: '1rem',
            'font-size': '18px'
        }
    }},
    {type: 'description', value: [
        'I am a junior+ developer, I have been doing web development for 2-3 years now, but I started my professional career on March 1, 2024',
        'My technology stacks are: HTML, CSS, JavaScript, PHP, and CMS: 1C-Bitrix',
        'The IDEs I use are: Visual Studio Code, PhpStorm, Figma and a bit of PyCharm'
    ], option: {
        styles: {
            'text-align': 'center',
            'font-weight': 'bold',
            'font-style': 'italic'
        }
    }},
    {type: 'image', value: image, option: {
        styles: {
            display: 'flex',
            'justify-content': 'center',
            padding: '1rem'
        }
    }}
]

export { modelArray }
import image from '../images/image.png'
import { Block } from '../classes/blocks'

const modelArray = [
    new Block('title', 'Website builder in pure JavaScript', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #350431, #433240)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),

    new Block('text', 'This site was created for an informative purpose and to create certain functions', {
        styles: {
            'text-align': 'center',
            background: '#000',
            color: '#fff',
            padding: '1rem',
            'font-size': '18px'
        }
    }),

    new Block('description', [
        'I am a junior+ developer, I have been doing web development for 2-3 years now, but I started my professional career on March 1, 2024',
        'My technology stacks are: HTML, CSS, JavaScript, PHP, and CMS: 1C-Bitrix',
        'The IDEs I use are: Visual Studio Code, PhpStorm, Figma and a bit of PyCharm'
    ], {
        styles: {
            'text-align': 'center',
            'font-weight': 'bold',
            'font-style': 'italic'
        }
    }),

    new Block('image', image, {
        styles: {
            display: 'flex',
            'justify-content': 'center',
            padding: '1rem'
        }
    }),
    
]

export { modelArray }
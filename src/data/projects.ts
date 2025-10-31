import AdviceGeneratorImage from '@/assets/advice-generator.png'
import CalculatorImage from '@/assets/my_calculator.png'
import HTMLImage from '@/assets/stacks/html-124-svgrepo-com.svg'
import CSSImage from '@/assets/stacks/css3-02-svgrepo-com.svg'
import JSImage from '@/assets/stacks/javascript-155-svgrepo-com.svg'

import { Figma, Link } from 'lucide-vue-next'

export default [
    {
        title: 'Advice generator',
        description:
            'Un proyecto que consta de el consumo de APIs de terceros utilizando frameworks front',
        image: AdviceGeneratorImage,
        published_at: 'Oct 19, 2022',
        links: [{ name: 'Live', url: 'https://saidsuyv.click/advice-generator/index.html', icon: Link }],
        stack: [
            { name: 'HTML', image: HTMLImage },
            { name: 'CSS', image: CSSImage },
            { name: 'Javascript', image: JSImage },
        ],
    },
    {
        title: 'Calculator',
        description: 'Un proyecto que consta de una calculadora con tecnologías web',
        published_at: 'Nov 2, 2022',
        image: CalculatorImage,
        links: [
            { name: 'Live', url: 'https://saidsuyv.click/my_calculator/index.html', icon: Link },
            {
                name: 'Figma',
                url: 'https://www.figma.com/design/TBd9pDaY0JBQwau4RQmeQN/Calculator?node-id=0-1&t=OLs7AeaJ5aLJ3V4y-1',
                icon: Figma,
            },
        ],
        stack: [
            { name: 'HTML', image: HTMLImage },
            { name: 'CSS', image: CSSImage },
            { name: 'Javascript', image: JSImage },
        ],
    },
];
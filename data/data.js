import { genId } from "./IdGenerator/genId.js"

export const data = {
    id: genId(),
    title: 'What to learn',
    tasks: [
        {
            id: genId(),
            title: 'Learn HTML'
        },
        {
            id: genId(),
            title: 'Learn CSS'
        },
    ]
}

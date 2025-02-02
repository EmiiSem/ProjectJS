import { Site } from "./site"
import { Sidebar } from "./sidebar"


export class App {
    constructor(model) {
        this.model = model
    }

    init() {
        const sit = new Site('#sit')

        sit.render(this.model)

        const update = newBlock => {
            this.model.push(newBlock)
            sit.render(this.model)
        }

        new Sidebar('#panel', update)
    }
}
import { app } from "https://unpkg.com/hyperapp"
import { main, h1, button, text } from "https://unpkg.com/@hyperapp/html?module"

import { history, intro } from "./actions.js"

app({
    init: {
        pName: "The Red Baron",
        eName: "The Devil of Tokyo",
        history: [
            { name: "attackSword", result: "miss" }
        ]
    },
    view: (state) => main({}, [
        intro(state),
        history(state)
    ]),
    node: document.getElementById("app"),
})

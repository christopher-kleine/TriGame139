import { app } from "https://unpkg.com/hyperapp"
import { main, h1, button, text } from "https://unpkg.com/@hyperapp/html?module"

import { player } from "./player.js"
import { enemy } from "./enemy.js"
import { intro } from "./actions.js"

app({
    init: {
        pName: "The Red Baron",
        eName: "The Devil of Tokyo",
        actions: []
    },
    view: (state) => intro(state),
    node: document.getElementById("app"),
})

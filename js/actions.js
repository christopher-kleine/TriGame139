import { p, text } from "https://unpkg.com/@hyperapp/html?module"
import { player } from "./player.js"
import { enemy } from "./enemy.js"

const playerAction = (state, action) => p({}, text(player(state)[action.name].text))
const enemyAction = (state, action) => p({}, text(enemy(state)[action.name].text))

const genAction = (state, action, index) => index % 2 === 0 ? playerAction(state, action) : enemyAction(state, action)

export const intro = (state) => p({}, [
    p({}, text(`Welcome to the final of the coloseum of Tristania!`)),
    p({}, text(`Today we're having special guests for you!`)),
    p({}, text(`In the left corner - the challenger with a winning streak of 15 battles - ${state.pName}!`)),
    p({}, text(`And in the right corner, the current champion: ${state.eName}!`)),
    p({}, text(`What will they do?!`))
])

export const history = (state) => p({}, state.history.map((action, index) => genAction(state, action, index)))

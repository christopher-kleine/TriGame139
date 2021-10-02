import { p, text } from "https://unpkg.com/@hyperapp/html?module"

export const intro = (state) => p({}, [
    p({}, text(`Welcome to the final of the coloseum of Tristania!`)),
    p({}, text(`Today we're having special guests for you!`)),
    p({}, text(`In the left corner - the challenger with a winning streak of 15 battles - ${state.pName}!`)),
    p({}, text(`And in the right corner, the current champion: ${state.eName}!`)),
    p({}, text(`What will they do?!`))
])

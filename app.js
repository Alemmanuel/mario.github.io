import {fondoNubes} from './fondoNubes.js';
import {crearMario} from './mario.js';
const app = new PIXI.Application();

await app.init({
    resizeTo: window,
    backgroundColor: '0x0090FF'
})

document.body.appendChild(app.canvas)

crearMario(app)
fondoNubes(app)

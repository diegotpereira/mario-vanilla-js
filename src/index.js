import Jogo from './cenas/Jogo.js'
import Phaser from 'Phaser'

import './assets/scss/index.scss'

const config = {

    width: 640,
    height: 480,
    backgroundColor: '#FFFFAC',
    title: 'Tilemap',
    pixelArt: true,
    fisicos: {
        default: 'arcade',
        arcade: {
            y: 1000
        }
    },

    cena: [
        Jogo
    ]
}
new Phaser.Jogo(config);
// new Jogo(config)
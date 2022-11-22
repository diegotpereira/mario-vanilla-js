import Jogo from './cenas/Jogo.js'
import Phaser from 'Phaser'

const config = {

    width: 640,
    height: 480,
    backgroundColor: '#FFFFAC',
    cena: [
        Jogo
    ]
}
new Phaser.Jogo(config);
// new Jogo(config)
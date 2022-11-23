import Cena from '../config/animacao.js'

class Jogo extends Phaser.Cena {

    constructor() {
        super('Jogo');
    }

    preload() {
        this.load.image('tiles', './assets/tiles.png');
        this.load.tilemapTiledJSON('map', './assets/map.json');
        // this.load.atlas('atlas', './assets/mario-atlas.png','./assets/mario-atlas.json');
    }

    create() {
        this.map = this.make.tilemap({ key: 'map'});
        this.tileset = this.map.addTilesetImage('map-tileset', 'tiles');
        this.plataform = this.map.createStaticLayer('plataform', this.tileset, 0, 0);

        this.map.createStaticLayer('background', this.tileset, 0, 0);
        this.plataform.setCollisionByExclusion(-1, true);
    }
}

export default Jogo;
export default cena => {
    cena.amims.create({
        // chave: "1"
        key: 'run',
        frames: scene.anims.generateFrameNames('atlas', {
            prefix: 'mario-atlas_',
            start: 1,
            end: 3,
        }),
        frameRate: 10,
        repeat: -1
    })
}
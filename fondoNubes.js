export  async function fondoNubes(app){
    const fondoNubes = await PIXI.Assets.load('/image/nubesFondo.png')
    const background = new PIXI.TilingSprite(
        fondoNubes,
        app.screen.width, app.screen.height
    );

    app.stage.addChildAt(background, 0);

    app.ticker.add((tiempo) =>{
        background.tilePosition.x +=1
    })
}
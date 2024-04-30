export async function crearMario(app){
    const archivoImagenMario = await PIXI.Assets.load('/JSON/mario.png')

    PIXI.Assets.add({
        alias: 'marioM',
        src:'/JSON/mario.json',
        data: {texture : archivoImagenMario}
    });

    const animacion = await PIXI.Assets.load('marioM');

    const anim1 = new PIXI.AnimatedSprite(animacion.animations.mario);
    anim1.animationSpeed = 0.2
    anim1.play();
    

    app.stage.addChild(anim1);
    anim1.width= 50;
    anim1.height= 50;
    document.addEventListener("keydown", function (tecla) {
        if (tecla.key == "ArrowUp") {
          anim1.y-=5;
        } else if (tecla.key == "ArrowRight") {
          anim1.x+=5;
        } else if (tecla.key == "ArrowLeft") {
          anim1.x-=5;
        
        } else if (tecla.key == "ArrowDown") {
          anim1.y+=5;
        }
      });
}
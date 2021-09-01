var gato,imggato,imggato2,imggato3
var rato,imgrato,imgrato1,imgrato2
var fundo,imgfundo
function preload() {
 imgfundo=loadImage("images/garden.png")
 imggato=loadAnimation("images/cat1.png")
 imggato2=loadAnimation("images/cat2.png","images/cat3.png")
 imgrato=loadAnimation("images/mouse1.png")
 imgrato2=loadAnimation("images/mouse2.png","images/mouse3.png")
 imggato3=loadAnimation("images/cat4.png")
imgrato1=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
  gato=createSprite(870,600,10,10)
  gato.addAnimation("gato",imggato)
  gato.scale=0.2
  rato=createSprite(170,600,10,10)
  rato.addAnimation("rato",imgrato)
  rato.scale=0.1
    
}

function draw() {

    background(imgfundo);
    if(gato.x-rato.x<(gato.width-rato.width)/2){
        gato.velocityX=0
gato.addAnimation("ultimaimggato",imggato3)
gato.changeAnimation("ultimaimggato")

gato.scale=0.2
rato.addAnimation("ultimaimgrato",imgrato1)
rato.changeAnimation("ultimaimgrato")
    }
    //Escreva a condição aqui para avaliar se o gato e o rato colidem
    drawSprites();
}


function keyPressed(){
    if(keyCode==LEFT_ARROW){
  rato.addAnimation("rato",imgrato2)
  rato.changeAnimation("rato",imgrato2)
  rato.frameDelay=25
  gato.velocityX=-5
  gato.addAnimation("gatito",imggato2)
  gato.changeAnimation("gatito")
  gato.scale=0.2

    }


}

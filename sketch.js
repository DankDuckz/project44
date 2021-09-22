var backgroundImg, characterImg, enemy1Img, enemy2Img, gemImg
var bg, character, gem

function preload() {
  backgroundImg = loadImage("assets/background.gif")
  characterImg = loadAnimation("cAnim/sprite_0.png","cAnim/sprite_1.png","cAnim/sprite_2.png","cAnim/sprite_3.png")
  enemy1Img = loadImage("assets/enemy1.gif")
  enemy2Img = loadImage("assets/enemy2.png")
  gemImg = loadImage("assets/gem.gif")
}

function setup() 
{
  createCanvas(600,600);
  
  bg = createSprite(width/2,height/2)
  bg.addImage(backgroundImg)
  bg.scale = 8

  character = createSprite(100,520)
  character.addAnimation("moving",characterImg)

}

function draw() 
{
  character.x = mouseX
  

  // if (keyCode == 97) {
  //   console.log("a")
  // }

  spawnEnemies()

  drawSprites()
}

function spawnEnemies() {
  if (frameCount % 30 == 0) {
    var num = Math.round(random(1,2))
    var img
    if (num == 1) {
      img = enemy1Img
    }
    else {
      img = enemy2Img
    }

    enemy = createSprite(random(0,width),-50)
    enemy.addImage(img)
    enemy.velocityY = 10
  }
}
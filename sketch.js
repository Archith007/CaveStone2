//Cavestone2
var gameStance = "standing";
var a = 0;
var b = 0;
var c = 0;

var speed

var block, trophy, edges;

var spot1Image, starImage, spot2Image;
var boxAnimation, blockAnimation;

var jumpSound, dieSound, checkSound, starSound;

var spike, death

var platform, form, plat, platfromG, formG, platG

var bckground, bckground2, bckgroundImage, invis

function preload() {

  boxAnimation = loadAnimation("download (18).png", "download (17).png", "download (16).png");

  blockAnimation = loadAnimation("download (15).png", "download (14).png", "download (13).png");

  starImage = loadImage("star.png");
  spot1Image = loadImage("start.png");
  spot2Image = loadImage("spot.png");
  spikeImage = loadImage("download (27).png")
  bckgroundImage = loadImage("backGround.png");

  jumpSound = loadSound("bounce3.mp3");
  starSound = loadSound("star.mp3");
  dieSound = loadSound("stab.mp3");
  checkSound = loadSound("check.mp3");
}



function setup() {

  createCanvas(800, 300);

  text((a * 10), 669, 25);
  text("score:", 635, 25);

  text((b * 10), 173, 25);
  text("highscore:", 115, 25);

  text((c * 10), 445, 25);
  text("previous score:", 361, 25);
  
  
  block = createSprite(650, 300, 20, 20);
  block.addAnimation("block", boxAnimation)
  block.addAnimation("box1", blockAnimation);


  death = createSprite(20, 150, 1, 300);
  death.visible = false


  trophy = createSprite(block.x, random(25, 275))
  trophy.addImage(starImage)
  trophy.scale = 0.325


  bckground = createSprite(0, 220)
  bckground.addImage(bckgroundImage)
  bckground.scale = 0.835

  bckground2 = createSprite(800, 220)
  bckground2.addImage(bckgroundImage)
  bckground2.scale = 0.835

  
  invis = createSprite(400, 292, 800, 1)

  spike = createSprite(13, -2)
  spike.addAnimation("spiky", spikeImage)
  spike.scale = 0.5

  spike = createSprite(13, 16)
  spike.addAnimation("spiky", spikeImage)
  spike.scale = 0.5

  spike = createSprite(13, 34)
  spike.addAnimation("spiky", spikeImage)
  spike.scale = 0.5

  spike = createSprite(13, 52)
  spike.addAnimation("spiky", spikeImage)
  spike.scale = 0.5

  spike = createSprite(13, 70)
  spike.addAnimation("spiky", spikeImage)
  spike.scale = 0.5

  spike = createSprite(13, 88)
  spike.addAnimation("spiky", spikeImage)
  spike.scale = 0.5

  spike = createSprite(13, 106)
  spike.addAnimation("spiky", spikeImage)
  spike.scale = 0.5

  spike = createSprite(13, 124)
  spike.addAnimation("spiky", spikeImage)
  spike.scale = 0.5

  spike = createSprite(13, 142)
  spike.addAnimation("spiky", spikeImage)
  spike.scale = 0.5

  spike = createSprite(13, 160)
  spike.addAnimation("spiky", spikeImage)
  spike.scale = 0.5

  spike = createSprite(13, 178)
  spike.addAnimation("spiky", spikeImage)
  spike.scale = 0.5

  spike = createSprite(13, 196)
  spike.addAnimation("spiky", spikeImage)
  spike.scale = 0.5

  spike = createSprite(13, 214)
  spike.addAnimation("spiky", spikeImage)
  spike.scale = 0.5

  spike = createSprite(13, 232)
  spike.addAnimation("spiky", spikeImage)
  spike.scale = 0.5

  spike = createSprite(13, 250)
  spike.addAnimation("spiky", spikeImage)
  spike.scale = 0.5

  spike = createSprite(13, 268)
  spike.addAnimation("spiky", spikeImage)
  spike.scale = 0.5

  spike = createSprite(13, 286)
  spike.addAnimation("spiky", spikeImage)
  spike.scale = 0.5

  spike = createSprite(13, 304)
  spike.addAnimation("spiky", spikeImage)
  spike.scale = 0.5

  edges = createEdgeSprites();

  platformG = new Group()
  formG = new Group()
  platG = new Group()



}


function draw() {

  trophy.x = block.x

  speed = Math.round(105 / (7 + (a * 0.25)))

  if (gameStance == "standing") {
    block.changeAnimation("box1", blockAnimation);
    block.scale = 0.8
  }

  if (gameStance == "not standing") {
    block.changeAnimation("block", boxAnimation);
    block.scale = 0.532
  }

  background("#c4efff");
  block.velocityY = block.velocityY + 1;
  block.velocityX = 0;

  text((a * 10), 669, 25);
  text("score:", 635, 25);

  text((b * 10), 173, 25);
  text("highscore:", 115, 25);

  text((c * 10), 445, 25);
  text("previous score:", 361, 25);

  bckground.velocityX = -10
  bckground2.velocityX = -10

  if (bckground2.x === 400) {

    bckground.x = 1200
  }

  if (bckground.x === 400) {

    bckground2.x = 1200
  }


  if (block.isTouching(trophy)) {

    a = a + 1
    trophy.y = random(25, 275)
    starSound.play()
  }

  if (b < a) {
    b = a
  }

  if ((a % 10 == 0) && (block.isTouching(trophy))) {
    checkSound.play();
  }

  if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.y > 260) {
    block.velocityY = -15;
    gameStance = "not standing";
    jumpSound.play();
  }

  if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(platG)) {
    block.velocityY = -15;
    gameStance = "not standing";
    jumpSound.play();
  }




  if (keyDown("DOWN_ARROW") || keyDown("S")) {
    block.velocitX = 0;
    gameStance = "standing";
  }

  if (gameStance == "not standing") {
    block.addAnimation("box", blockAnimation);
  }

  if ((keyWentUp("UP_ARROW")) || (keyWentUp("SPACE") || keyWentUp("W"))) {
    gameStance = "standing";
  }

  if (keyWentUp("DOWN_ARROW") || keyWentUp("S")) {
    gameStance = "standing";
  }

  block.collide(edges)

  if (block.isTouching(death)) {
    dieSound.play()
    platformG.destroyEach()
    formG.destroyEach()
    platG.destroyEach()

    block.x = 650
    c = a
    a = 0

  }

  drawSprites();

  if (frameCount % (Math.round(133 / (7 + (a * 0.25)))) === 0) {

    platformF()

  }

  console.log(speed)

  block.collide(platformG)
  block.collide(invis)

  platformG.setVelocityXEach(-(7 + (a * 0.25)))
  formG.setVelocityXEach(-(7 + (a * 0.25)))
  platG.setVelocityXEach(-(7 + (a * 0.25)))
}


function platformF() {
  form = createSprite(825, random(75, 295), 10, 10)
  platform = createSprite(825, form.y + 2, 87, 26)
  plat = createSprite(825, form.y - 15, 87, 1)

  platform.visible = false
  plat.visible = false

  platform.velocityX = -(7 + (a * 0.25))
  form.velocityX = -(7 + (a * 0.25))
  plat.velocityX = -(7 + (a * 0.25))
  
  platform.lifetime = 119
  form.lifetime = 119
  plat.lifetime = 119

  form.depth = -1

  form.scale = 0.1

  var rand = Math.round(random(1, 2));

  switch (rand) {
    case 1:
      form.addImage(spot1Image);
      break;
    case 2:
      form.addImage(spot2Image);
      break;
    default:
      break;
  }

  platformG.add(platform)
  formG.add(form)
  platG.add(plat)


}
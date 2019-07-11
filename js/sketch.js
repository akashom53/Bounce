let screenWidth = 840
let aspectRatio = 16/9
let screenHeight = screenWidth / aspectRatio


class Ball {
  constructor(colorR, colorG, colorB, mass, radius) {
    this.colorR = colorR
    this.colorG = colorG
    this.colorB = colorB

    this.mass = mass
    this.radius = radius

    this.posX = 100
    this.posY = 100

    this.vX = 0
    this.vY = 0

    this.aX = 0
    this.aY = 0
  }

  show() {
    fill(this.colorR, this.colorG, this.colorB)
    ellipse(this.posX, this.posY, this.radius, this.radius)
  }

  move() {
    this.vX = this.vX + this.aX
    this.vY = this.vY + this.aY

    this.posX = this.posX + this.vX
    this.posY = this.posY + this.vY

    this.aX = 0
    this.aY = 0
  }
}


let ball = new Ball(255, 0, 0, 500, 100)


function setup() {
  createCanvas(screenWidth, screenHeight)
  background(240, 240, 255)
}

function draw() {
  background(240, 240, 255)
  ball.move()
  ball.show()
  if (ball.posY >= (screenHeight - 20) - ball.radius/2) {
    ball.aY = 0
    ball.vY = 0
    ball.posY = (screenHeight - 20) - ball.radius/2
  } else {
    ball.aY = 9.8
  }

  fill(0, 0, 0)
  rect(0, screenHeight - 20, screenWidth, 20)
}



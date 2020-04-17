export default class Lineone {
  constructor(gameWidth, gameHeight) {
    this.height = 3;
    this.width = gameWidth;
    this.position = {
      x: 0,
      y: 50
    };
    this.speed = 0;
    this.maxSpeed = 0.25;
  }

  draw(ctx) {
    ctx.fillStyle = "#fff";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  startMoveUp() {
    this.speed += this.maxSpeed;
  }
}

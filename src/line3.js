export default class Linethree {
  constructor(gameWidth, gameHeight) {
    this.height = 3;
    this.width = gameWidth;
    this.position = {
      x: 0,
      y: 275
    };
  }

  draw(ctx) {
    ctx.fillStyle = "#fff";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

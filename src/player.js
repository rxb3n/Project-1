export default class Player {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.speed = 0;
    this.maximumSpeed = 2;

    this.width = 25;
    this.height = 25;

    this.position = {
      x: 225,
      y: 150
    };
  }

  draw(ctx) {
    ctx.fillStyle = "#fff";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  goUp() {
    this.position.y -= 112.5;
  }

  goDown() {
    this.position.y += 112.5;
  }

  goLeft() {
    this.speed = -this.maximumSpeed;
  }

  goRight() {
    this.speed = this.maximumSpeed;
  }

  stop() {
    this.speed = 0;
  }

  update(dTime) {
    if (!dTime) return;
    this.position.x += this.speed;
    if (this.position.x < 5) this.position.x = 5;
    if (this.position.x > 470) this.position.x = 470;

    if (this.position.y < 0) this.position.y = 275 - 12.5 ;
    if (this.position.y > 300) this.position.y = 50 - 12.5;
  }
}

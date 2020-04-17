var ypositions = [50, 162.5, 275];
var randomPosy = Math.floor(Math.random() * ypositions.length);
let randomY = ypositions[randomPosy];

export default class RightObstacle {
  constructor(randomY) {
    this.maxSpeed = 1.25;
    this.width = 15;
    this.height = 15;
    this.position = {
      x: 0,
      y: randomY - 7.5
    };
  }
  increaseSpeed() {
    this.maxSpeed += 0.25;
  }
  
  update(dTime) {
    if (!dTime) return;
    this.position.x += this.maxSpeed;
  }

  draw(ctx) {
    ctx.fillStyle = "#f00";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  detectCollision(rect1) {
    if (
      rect1.position.x < this.position.x + this.width &&
      rect1.position.x + rect1.width > this.position.x &&
      rect1.position.y < this.position.y + this.height &&
      rect1.position.y + rect1.height > this.position.y
    ) {
      return true;
    }
  }
  
  
}

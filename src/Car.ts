import Obstacle from "./Obstacle";
export default class Car {
  x: number;
  y: number;
  width: number;
  height: number;
  image: HTMLImageElement;
  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    imagePath: string
  ) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = imagePath;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  //Move the car left or right
  moveLeft() {
    if (this.x > 0) {
      this.x -= 200;
    }
    if (this.x < 0) {
      this.x = 100;
    }
  }

  moveRight() {
    if (this.x + this.width < 600) {
      this.x += 200;
    }
    if (this.x + this.width > 600) {
      this.x = 600 - 100;
    }
  }

  collidesWith(obstacle: Obstacle) {
    return !(
      this.x > obstacle.x + obstacle.width ||
      this.x + this.width < obstacle.x ||
      this.y > obstacle.y + obstacle.height ||
      this.y + this.height < obstacle.y
    );
  }
}

import Car from "./Car";
export default class Obstacle {
  x: number;
  y: number;
  width: number;
  height: number;
  image: HTMLImageElement;
  speed: number;
  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    imagePath: string,
    speed: number
  ) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = imagePath;
    this.speed = speed;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  //Move the obstacle
  update() {
    this.y += this.speed;
  }

  collidesWith(car: Car) {
    return !(
      this.x > car.x + car.width ||
      this.x + this.width < car.x ||
      this.y > car.y + car.height ||
      this.y + this.height < car.y
    );
  }
}

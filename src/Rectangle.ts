interface iRectangle {
  x: number;
  y: number;
  width: number;
  height: number;
}

export default class Rectangle implements iRectangle {
  x: number;
  y: number;
  width: number;
  height: number;
  constructor(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}

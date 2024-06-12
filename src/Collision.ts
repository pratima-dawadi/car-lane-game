import Car from "./Car";
import Obstacle from "./Obstacle";
export default function collision(Obstacle: Obstacle, car: Car): void {
  if (Obstacle.y >= 650) {
    // Collision detection with car
    if (Math.abs(car.y - Obstacle.y) < car.width) {
    }
  }
}

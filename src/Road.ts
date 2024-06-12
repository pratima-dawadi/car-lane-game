import Rectangle from "./Rectangle";
import Car from "./Car";
import Obstacle from "./Obstacle";
import getRandom from "./getRandom";
import initialInfo from "./initialInfo";

export default function createLane() {
  const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d")!;
  const rectangle1 = new Rectangle(200, 150, 15, 100);
  const rectangle2 = new Rectangle(400, 150, 15, 100);
  const rectangle3 = new Rectangle(200, 550, 15, 100);
  const rectangle4 = new Rectangle(400, 550, 15, 100);

  const rectangles = [rectangle1, rectangle2, rectangle3, rectangle4];
  const SPEED = 5;
  var SCORE = 0;
  let isGameOver = false;
  let isGameStarted = false;

  const playerCar = new Car(300, 650, 50, 100, "/car.png");

  const Obstacle1 = new Obstacle(
    100,
    getRandom(-400, 0),
    50,
    100,
    "/obstacle.png",
    5
  );
  const Obstacle2 = new Obstacle(
    500,
    getRandom(-400, 0),
    50,
    100,
    "/obstacle.png",
    5
  );
  const Obstacle3 = new Obstacle(
    300,
    getRandom(-400, 0),
    50,
    100,
    "/obstacle.png",
    5
  );
  const obstacles = [Obstacle1, Obstacle2, Obstacle3];

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    rectangles.forEach((rectangle) => {
      ctx.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);

      rectangle.y += SPEED;

      if (rectangle.y > canvas.height) {
        rectangle.y = 0;
      }
    });
    obstacles.forEach((obstacle) => {
      obstacle.draw(ctx);
      obstacle.update();
      if (obstacle.y > canvas.height) {
        SCORE += 1;
        obstacle.y = getRandom(-800, 0);
      }

      // Collision detection with obstacles
      if (playerCar.collidesWith(obstacle)) {
        isGameOver = true;

        //On game over, reset the position of the obstacles
        for (let i = 0; i < obstacles.length; i++) {
          obstacles[i].y = getRandom(-800, 0);
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = "50px Arial";
        ctx.fillText(`Score: ${SCORE}`, 200, 200);
        ctx.fillText("Game Over !!", 150, 300);
        ctx.fillText("Press 'R' to restart", 100, 400);
        SCORE = 0;
      }
    });
    playerCar.draw(ctx);
    ctx.font = "25px Arial";
    ctx.fillText(`Score: ${SCORE}`, 4, 20);

    //Keep drawing canvas until game is over
    if (!isGameOver) {
      requestAnimationFrame(draw);
    }
  }

  initialInfo(ctx, canvas);

  document.getElementById("startButton")?.addEventListener("click", () => {
    isGameStarted = true;
    document.getElementById("startButton")?.remove();
    requestAnimationFrame(draw);
  });

  window.addEventListener("keypress", (event) => {
    if (isGameStarted) {
      switch (event.key) {
        case "a": {
          playerCar.moveLeft();
          break;
        }

        case "d": {
          playerCar.moveRight();
          break;
        }

        case "r": {
          isGameOver = false;
          SCORE = 0;
          obstacles.forEach((obstacle) => {
            obstacle.y = getRandom(-800, 0);
          });
          draw();
          break;
        }

        default: {
          break;
        }
      }
    }
  });
}

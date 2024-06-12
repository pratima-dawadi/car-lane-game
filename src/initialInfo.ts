export default function initialInfo(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement
) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = "30px Arial";
  ctx.fillStyle = "white";
  ctx.fillText("***************************************************", 0, 150);
  ctx.fillText("Welcome to the Car Lane Game !!", 100, 200);
  ctx.fillText("***************************************************", 0, 250);
  ctx.fillText("Use 'A' to move left and 'D' to move right", 20, 450);
  ctx.fillText("Avoid obstacles and get the highest score!", 20, 550);
  ctx.fillText("***************************************************", 0, 650);

  const startButton = document.createElement("button");
  startButton.id = "startButton";
  startButton.textContent = "Start Game";
  startButton.style.position = "absolute";
  startButton.style.left = "50%";
  startButton.style.top = "45%";
  startButton.style.transform = "translate(-50%, -50%)";
  startButton.style.padding = "10px 20px";
  startButton.style.fontSize = "20px";
  startButton.style.cursor = "pointer";
  startButton.style.borderRadius = "8%";
  startButton.style.backgroundColor = "#4CAF50";

  // Append the button to the canvas container
  const canvasContainer = document.querySelector(
    ".canvas-container"
  ) as HTMLDivElement;
  canvasContainer.appendChild(startButton);
}

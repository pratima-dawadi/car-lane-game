import createLane from "./Road";

const canvas = document.querySelector("#canvas") as HTMLCanvasElement;

const container = document.querySelector(".canvas-container") as HTMLDivElement;

canvas.width = container.clientWidth;
canvas.height = container.clientHeight;

createLane();

export default function getRandom(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function getNextCycle(current: number) {
  return current === 0 || current === 8 ? 1 : current + 1;
}

export function formatSecondsToMinutes(secs: number) {
  const minutes = String(Math.floor(secs / 60)).padStart(2, '0');
  const secsMod = String(Math.floor(secs % 60)).padStart(2, '0');
  return `${minutes}:${secsMod}`;
}

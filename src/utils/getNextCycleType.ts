import type { TaskModel } from '../models/TaskModel';

export function getNextCycleType(current: number): TaskModel['type'] {
  if (current % 8 === 0) return 'longBreakTime';
  if (current % 2 === 0) return 'shortBreakTime';
  return 'workTime';
}

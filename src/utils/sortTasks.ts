import type { TaskModel } from '../models/TaskModel';

export type SortTaskOptions = {
  tasks: TaskModel[];
  direction?: 'asc' | 'desc';
  field?: keyof TaskModel;
};

export function sortTasks({
  field = 'startDate',
  direction = 'desc',
  tasks = [],
}: SortTaskOptions): TaskModel[] {
  return [...tasks].sort((a, b) => {
    const aV = a[field];
    const bV = b[field];

    if (aV === null && bV === null) return 0;
    if (aV === null) return 1;
    if (bV === null) return -1;

    if (typeof aV === 'number' && typeof bV === 'number') {
      return direction === 'asc' ? aV - bV : bV - aV;
    }

    if (typeof aV === 'string' && typeof bV === 'string') {
      return direction === 'asc' ? aV.localeCompare(bV) : bV.localeCompare(aV);
    }

    return 0;
  });
}

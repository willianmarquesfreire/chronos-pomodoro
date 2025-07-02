import { createContext } from 'react';
import { initialTaskState } from './initialState';
import type { TaskStateModel } from '../../models/TaskStateModel';
import type { TaskActionModel } from './taskActions';

const initialContextValue = {
  state: initialTaskState,
  dispatch: () => {},
};

export type TaskContextProps = {
  state: TaskStateModel;
  dispatch: React.Dispatch<TaskActionModel>;
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);

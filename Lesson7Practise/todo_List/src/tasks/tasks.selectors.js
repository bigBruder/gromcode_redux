import { createSelector } from 'reselect';

export const taskListSelector = state => state.tasks.tasksList;

export const sortedTasksListSelector = createSelector([taskListSelector], taskList =>
  taskList.slice().sort((a, b) => a.done - b.done),
);

import * as tasksGateway from './tasksGateway.js';
import { taskListSelector } from './tasks.selectors';

export const TASKS_LIST_RECEIVED = 'TASKS_LIST_RECEIVED';

export const tasksListReceived = tasksList => {
  const action = {
    type: TASKS_LIST_RECEIVED,
    payload: {
      tasksList,
    },
  };
  return action;
};

export const getTaskList = () => {
  const thunkAction = function (dispatch) {
    tasksGateway.fetchTasksList().then(tasksList => dispatch(tasksListReceived(tasksList)));
  };
  return thunkAction;
};

export const updateTask = taskId => {
  const thunkAction = function (dispatch, getState) {
    const state = getState();
    const tasksList = taskListSelector(state);
    const tasks = tasksList.find(task => task.id === taskId);
    const updatedTask = {
      ...tasks,
      done: !tasks.done,
    };
    tasksGateway.updateTask(taskId, updatedTask).then(() => dispatch(getTaskList));
  };
  return thunkAction;
};

export const deleteTask = taskId => {
  const thunkAction = function (dispatch) {
    tasksGateway.deleteTask(taskId).then(() => dispatch(getTaskList));
  };
  return thunkAction;
};

export const createTask = text => {
  const thunkAction = function (dispatch) {
    const taskData = {
      text,
      done: false,
    };
    tasksGateway.createTask(taskData).then(() => dispatch(getTaskList));
  };
  return thunkAction;
};

const baseUrl = 'https://633aae56471b8c3955724549.mockapi.io/api/v1/tasks';

export const createTask = taskData =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskData),
  });

export const updateTask = (id, taskData) =>
  fetch(`${baseUrl}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json:utc-8',
    },
    body: JSON.stringify(taskData),
  });

export const deleteTask = id =>
  fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  });

export const fetchTasksList = () => fetch(baseUrl).then(res => res.json());

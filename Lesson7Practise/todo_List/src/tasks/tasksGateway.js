const baseUrl = 'https://63393790937ea77bfdc7dc64.mockapi.io/tasks';

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

export const fetchTasksList = () =>
  fetch(baseUrl).then(res => {
    if (res.ok) {
      return res.json();
    }
  });

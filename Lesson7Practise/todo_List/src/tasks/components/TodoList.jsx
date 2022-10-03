import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CreateTaskInput from './CreateTaskInput';
import TaskList from './TaskList';
import * as tasksAction from '../tasks.actions';
import { sortedTasksListSelector } from '../tasks.selectors';

class TodoList extends Component {
  componentDidMount() {
    this.props.getTaskList();
  }

  render() {
    return (
      <>
        <h1 className="title">Todo List</h1>
        <main className="todo-list">
          <CreateTaskInput onCreate={this.props.createTask} />
          <TaskList
            tasks={this.props.tasks}
            handleTaskStatusChange={this.props.updateTask}
            handleTaskDelete={this.props.deleteTask}
          />
        </main>
      </>
    );
  }
}

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape()),
  getTaskList: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired,
};

const mapDispatch = {
  getTaskList: tasksAction.getTaskList,
  updateTask: tasksAction.updateTask,
  deleteTask: tasksAction.deleteTask,
  createTask: tasksAction.createTask,
};

const mapState = state => ({
  tasks: sortedTasksListSelector(state),
});

export default connect(mapState, mapDispatch)(TodoList);

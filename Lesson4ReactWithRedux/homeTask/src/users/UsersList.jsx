import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from './User';
import Pagination from './Pagination';
import * as usersPageActions from './users.actions';

class UsersList extends Component {
  render() {
    const { users, goPrev, goNext, currentPage } = this.props;
    const itemsPerPage = 3;
    const toIndex = currentPage * itemsPerPage;
    const fromIndex = toIndex - itemsPerPage;
    const currentUsers = users.slice(fromIndex, toIndex);

    return (
      <div className="users">
        {
          <Pagination
            goPrev={goPrev}
            goNext={goNext}
            currentPage={currentPage}
            totalItems={users.length}
            itemsPerPage={itemsPerPage}
          />
        }
        {currentUsers.map(user => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </div>
    );
  }
}

const mapState = state => ({
  users: state.users.usersList,
  currentPage: state.users.currentPage + 1,
});

const mapDispatch = {
  goPrev: usersPageActions.prevPage,
  goNext: usersPageActions.nextPage,
};

export default connect(mapState, mapDispatch)(UsersList);

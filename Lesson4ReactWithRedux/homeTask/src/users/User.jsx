import React from 'react';

const User = ({ name, age }) => (
  <div className="user">
    {name}
    <span className="user__age">{age}</span>
  </div>
);

export default User;

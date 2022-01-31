import React from 'react';
import PropTypes from 'prop-types';
import NoneItem from './UserItems/NoneItem/NoneItem';
import './UserList.scss';
import ActiveUserItem from './UserItems/activeItem/ActiveUserItem';

const UserList = ({ usersNumber }) => {
  const splits = usersNumber.split('/');
  const activeItem = Number(splits[0]);
  const inactiveItem = Number(splits[1]);
  function setUser() {
    const userList = [];
    for (let i = 0; i < inactiveItem; i++) {
      if (activeItem > i) {
        userList.push(<ActiveUserItem id={i} />);
      } else {
        userList.push(<NoneItem id={i} />);
      }
    }
    return userList;
  }
  return (
    <div className="userList">
      <h2 className="userList__label">Игроков: {usersNumber}</h2>
      <div className="userList__flex">{setUser()}</div>
    </div>
  );
};

UserList.propTypes = {
  usersNumber: PropTypes.string.isRequired,
};
export default UserList;

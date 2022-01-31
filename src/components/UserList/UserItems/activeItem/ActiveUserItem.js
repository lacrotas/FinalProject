import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import './ActiveUserItem.scss';

const ActiveUserItem = ({ id }) => {
  return (
    <div className="activeUserItem" key={id}>
      <button className="activeUserItem__button" type="button">
        <Avatar className="activeUserItem__image--avatar" alt="Remy Sharp" />
        <h3 className="activeUserItem__label--name">Name</h3>
      </button>
      <div className="activeUserItem__stats">
        <h3 className="activeUserItem__label--rang">Novice</h3>
        <h3 className="activeUserItem__label--like">
          0 <ThumbUpIcon />
        </h3>
        <h3 className="activeUserItem__label--dislike">
          0 <ThumbDownAltIcon />
        </h3>
      </div>
      <button className="activeUserItem__button--delete" type="button">
        Удалить
      </button>
    </div>
  );
};
ActiveUserItem.propTypes = {
  id: PropTypes.number.isRequired,
};
export default ActiveUserItem;

import React from 'react';
import PropTypes from 'prop-types';
import AddIcon from '@mui/icons-material/Add';
import './NoneItem.scss';

const NoneItem = ({ id }) => {
  return (
    <div className="noneItem" key={id}>
      <AddIcon />
    </div>
  );
};
NoneItem.propTypes = {
  id: PropTypes.number.isRequired,
};
export default NoneItem;

import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';
import Authorization from './components/Authorization/Authorization';
import Registration from './components/Registration/Registration';

import './ModalWindow.scss';

const ModalWindow = ({ isOpen, toggleState, getUserInfo }) => {
  const [isAuthorizationWindow, setAuthorization] = useState(true);
  const toggleWindow = () => setAuthorization(!isAuthorizationWindow);

  return (
    <div className="modal-window">
      <Modal
        open={isOpen && isAuthorizationWindow}
        onClose={toggleState}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Authorization
          getUserInfo={getUserInfo}
          toggleWindow={toggleWindow}
          toggleState={toggleState}
        />
      </Modal>
      <Modal
        open={isOpen && !isAuthorizationWindow}
        onClose={toggleState}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Registration
          getUserInfo={getUserInfo}
          toggleWindow={toggleWindow}
          toggleState={toggleState}
        />
      </Modal>
    </div>
  );
};
ModalWindow.propTypes = {
  toggleState: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  getUserInfo: PropTypes.func.isRequired,
};
export default ModalWindow;

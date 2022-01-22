import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';

import './AlertDialog.scss';

const AlertDialog = ({ openAlert, getAsk }) => {
  return (
    <Dialog
      open={openAlert}
      onClose={() => getAsk('')}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Потверждение действия</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Вы уверены что хотите этого?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => getAsk(false)}>Отмена</Button>
        <Button onClick={() => getAsk(true)} autoFocus>
          Принять
        </Button>
      </DialogActions>
    </Dialog>
  );
};

AlertDialog.propTypes = {
  openAlert: PropTypes.bool.isRequired,
  getAsk: PropTypes.func.isRequired,
};

export default AlertDialog;

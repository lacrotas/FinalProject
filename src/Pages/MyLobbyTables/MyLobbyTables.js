import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';
import Button from '@mui/material/Button';
import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import MyLobbyRedaction from './MyLobbyRedaction/MyLobbyRedaction';
import AlertDialog from '../../components/shared/Alert/AlertDialog';
import './MyLobbyTables.scss';

const MyLobbyTables = ({
  lobby,
  getLobby,
  isError,
  isLoading,
  deleteMyLobby,
  getLobbyToRedaction,
}) => {
  const [lobbyRedact, setLobbyRedact] = useState(false);
  const [currentLobby, setCurrentLobby] = useState();
  /* для Alert */
  const [openAlert, setOpenAlert] = useState(false);
  const lobbyId = useRef(null);
  useEffect(() => {
    getLobby();
  }, []);

  function toggleState(id) {
    setOpenAlert(!openAlert);
    lobbyId.current = id;
  }

  function editLobby(row) {
    setCurrentLobby(row);
    setLobbyRedact(!lobbyRedact);
  }

  const getAsk = ask => {
    setOpenAlert(!openAlert);
    if (ask) {
      const payload = lobbyId.current;
      console.log(payload);
      deleteMyLobby(payload);
    }
  };

  if (isLoading) {
    return <p>Loading.. .</p>;
  }
  if (isError) {
    return <p>Error</p>;
  }
  if (lobbyRedact) {
    return (
      <MyLobbyRedaction currentLobby={currentLobby} getLobbyToRedaction={getLobbyToRedaction} />
    );
  }
  return (
    <TableContainer component={Paper}>
      {openAlert && <AlertDialog openAlert={openAlert} getAsk={getAsk} />}
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Название игры</TableCell>
            <TableCell align="right">Карта</TableCell>
            <TableCell align="right">Ранг</TableCell>
            <TableCell align="right">Количество игроков</TableCell>
            <TableCell align="right">Дата</TableCell>
            <TableCell align="right">Время</TableCell>
            <TableCell align="right">Действия</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lobby.map(row => (
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>{row.game}</TableCell>
              <TableCell align="right">{row.map}</TableCell>
              <TableCell align="right">{row.rang}</TableCell>
              <TableCell align="right">{row.users}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">
                <Button variant="text" onClick={() => editLobby(row)}>
                  <SettingsIcon fontSize="inherit" />
                </Button>
                <Button variant="text" onClick={() => toggleState(row.id)}>
                  <DeleteIcon fontSize="inherit" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

MyLobbyTables.propTypes = {
  lobby: PropTypes.array.isRequired,
  getLobby: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  deleteMyLobby: PropTypes.func.isRequired,
  getLobbyToRedaction: PropTypes.func.isRequired,
};
export default MyLobbyTables;

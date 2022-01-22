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
import { useState, useRef } from 'react';

import AlertDialog from '../../components/shared/Alert/AlertDialog';
import './MyLobbyTables.scss';

function getData() {
  const updatedRows = [];
  const oldGames = JSON.parse(localStorage.getItem('lobbyData') || '[]');
  const activeUser = JSON.parse(localStorage.getItem('activeUser') || '[]');

  for (let i = 0; i < oldGames.length; i++) {
    if (activeUser.id === oldGames[i].userId) {
      updatedRows.push({
        id: i,
        game: oldGames[i].game,
        map: oldGames[i].map,
        rang: oldGames[i].rang,
        users: oldGames[i].users,
        date: oldGames[i].date,
        time: oldGames[i].time,
      });
    }
  }
  return updatedRows;
}

const MyLobbyTables = () => {
  const rows = getData();
  const [openAlert, setOpenAlert] = useState(false);
  const lobbyId = useRef(null);

  function toggleState(id) {
    setOpenAlert(!openAlert);
    lobbyId.current = id;
  }

  const getAsk = ask => {
    setOpenAlert(!openAlert);
    if (ask) {
      deleteLobby(lobbyId.current);
    }
  };

  function deleteLobby(id) {
    const oldGames = JSON.parse(localStorage.getItem('lobbyData') || '[]');
    const updatedLobby = [];
    for (let i = 0; i < oldGames.length; i++) {
      if (id !== i) {
        updatedLobby.push({
          userId: oldGames[i].userId,
          game: oldGames[i].game,
          map: oldGames[i].map,
          rang: oldGames[i].rang,
          users: oldGames[i].users,
          date: oldGames[i].date,
          time: oldGames[i].time,
          comment: oldGames[i].comment,
        });
      }
    }
    localStorage.setItem('lobbyData', JSON.stringify(updatedLobby));
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
          {rows.map(row => (
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>{row.game}</TableCell>
              <TableCell align="right">{row.map}</TableCell>
              <TableCell align="right">{row.rang}</TableCell>
              <TableCell align="right">{row.users}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">
                <Button variant="text">
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
export default MyLobbyTables;

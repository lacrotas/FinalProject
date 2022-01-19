import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';

import './MyLobbyTables.scss';

function getData() {
  const updatedRows = [];
  const oldGames = JSON.parse(localStorage.getItem('lobbyData') || '[]');
  const activeUser = JSON.parse(localStorage.getItem('activeUser') || '[]');

  for (let i = 0; i < oldGames.length; i++) {
    if (activeUser.email === oldGames[i].user) {
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

class MyLobbyTables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
    };
  }

  componentDidMount() {
    this.setState({ rows: getData() });
  }
s
  render() {
    return (
      <TableContainer component={Paper}>
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
            {this.state.rows.map(row => (
              <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell>{row.game}</TableCell>
                <TableCell align="right">{row.map}</TableCell>
                <TableCell align="right">{row.rang}</TableCell>
                <TableCell align="right">{row.users}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">{row.time}</TableCell>
                <TableCell align="right">
                  <IconButton aria-label="delete" size="large">
                    <SettingsIcon fontSize="inherit" />
                  </IconButton>
                  <IconButton aria-label="delete" size="large">
                    <DeleteIcon fontSize="inherit" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
export default MyLobbyTables;

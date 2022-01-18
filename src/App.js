import './App.scss';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import FindLobbyTable from './pages/FindLobbyTable';
import CreateLobby from './pages/Lobby/CreateLobby';
import Layout from './components/Layout';
import MyLobby from './pages/MyLobbyTables/MyLobbyTables';
import AllLobbyTables from './pages/AllLobbyTables/AllLobbyTables';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FindLobby" element={<FindLobbyTable />} />
        <Route path="/CreateLobby" element={<CreateLobby />} />
        <Route path="/MyLobby" element={<MyLobby />} />
        <Route path="/AllLobby" element={<AllLobbyTables />} />
      </Routes>
    </Layout>
  );
};

export default App;

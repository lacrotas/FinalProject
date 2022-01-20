import './App.scss';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import CreateLobby from './pages/Lobby/CreateLobby';
import Layout from './components/Layout';
import MyLobby from './pages/MyLobbyTables/MyLobbyTables';
import AllLobbyTables from './pages/AllLobbyTables/AllLobbyTables';
import PersonalOffice from './pages/PersonalOffice/PersonalOffice';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CreateLobby" element={<CreateLobby />} />
        <Route path="/MyLobby" element={<MyLobby />} />
        <Route path="/AllLobby" element={<AllLobbyTables />} />
        <Route path="/PersonalOffice" element={<PersonalOffice />} />
      </Routes>
    </Layout>
  );
};

export default App;

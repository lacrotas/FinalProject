import './App.scss';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import FindLobbyTable from './Pages/FindLobbyTable';
import CreateLobby from './Pages/CreateLobby';
// import Header from './components/Header';
// import Footer from './components/Footer';
import Layout from './components/Layout';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FindLobby" element={<FindLobbyTable />} />
        <Route path="/CreateLobby" element={<CreateLobby />} />
      </Routes>
    </Layout>
  );
};

export default App;

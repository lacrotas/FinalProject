import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './pages/Home/Home';
import CreateLobby from './pages/Lobby/CreateLobby';
import Layout from './components/Layout';
import AllLobbyTables from './pages/AllLobbyTables/AllLobbyTables';
import PersonalOffice from './pages/PersonalOffice/PersonalOffice';
import store from './store/index';
import MyLobbyTablesContainer from './pages/MyLobbyTables/MyLobbyTablesContainer';

const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CreateLobby" element={<CreateLobby />} />
          <Route path="/MyLobby" element={<MyLobbyTablesContainer />} />
          <Route path="/AllLobby" element={<AllLobbyTables />} />
          <Route path="/PersonalOffice" element={<PersonalOffice />} />
        </Routes>
      </Layout>
    </Provider>
  );
};

export default App;

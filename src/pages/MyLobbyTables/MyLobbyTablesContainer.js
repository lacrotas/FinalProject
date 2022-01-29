import { connect } from 'react-redux';
import MyLobbyTables from './MyLobbyTables';
import { getLobby, deleteMyLobby, getLobbyToRedaction } from '../../store/thunks/myLobbyTable';

const mapStateToProps = state => {
  return {
    lobby: state.tableReducer.lobby,
    isLoading: state.tableReducer.isLoading,
    isError: state.tableReducer.isError,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getLobby: () => dispatch(getLobby()),
    deleteMyLobby: id => dispatch(deleteMyLobby(id)),
    getLobbyToRedaction: lobby => dispatch(getLobbyToRedaction(lobby)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyLobbyTables);

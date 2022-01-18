import React from 'react';

import { Link } from 'react-router-dom';
import Dota2Image from '../../../../assets/gameIco/dota2.jpg';
import CounterStrike from '../../../../assets/gameIco/cs.jpg';
import Lol from '../../../../assets/gameIco/lol.jpg';
import TeamFortress from '../../../../assets/gameIco/tf.jpeg';

import './ChooseGame.scss';

class ChooseGame extends React.Component {
  render() {
    return (
      <div className="chooseGame">
        <h2>ВЫБЕРИ СВОЮ ИГРУ</h2>
        <div className="chooseGame-flexBox">
          <div>
            <Link to="/CreateLobby">
              <img src={Dota2Image} alt="" href="/CreateLobby" />
            </Link>
          </div>
          <div>
            <Link to="/CreateLobby">
              <img src={CounterStrike} alt="" />
            </Link>
          </div>
          <div>
            <Link to="/CreateLobby">
              <img src={Lol} alt="" />
            </Link>
          </div>
          <div>
            <Link to="/CreateLobby">
              <img src={TeamFortress} alt="" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ChooseGame;

import React from 'react';
import Dota2Image from '../assets/gameIco/dota2.jpg';
import CounterStrike from '../assets/gameIco/cs.jpg';
import Lol from '../assets/gameIco/lol.jpg';
import TeamForters from '../assets/gameIco/tf.jpeg';

class ChooseGame extends React.Component {
  render() {
    return (
      <div className="chooseGame">
        <h2>ВЫБЕРИ СВОЮ ИГРУ</h2>
        <div className="chooseGame-flexBox">
          <div>
            <img src={Dota2Image} alt="" />
          </div>
          <div>
            <img src={CounterStrike} alt="" />
          </div>
          <div>
            <img src={Lol} alt="" />
          </div>
          <div>
            <img src={TeamForters} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default ChooseGame;

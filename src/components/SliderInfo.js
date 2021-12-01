import React from 'react';
import Slider1 from '../assets/slider/slider1.jpg';
import Slider2 from '../assets/slider/slider2.jpg';
import Slider3 from '../assets/slider/slider3.jpg';
import Slider4 from '../assets/slider/slider4.jpg';

class Header extends React.Component {
  render() {
    return (
      <div className="captioned-gallery">
        <figure className="slider">
          <figure>
            <img src={Slider1} alt="" />
            <div>
              <h2>ВЫБЕРИ КОМАНДУ</h2>
              <p>присоединяйся к другим игрокам для совместной игры</p>
            </div>
          </figure>
          <figure>
            <img src={Slider2} alt="" />
            <div>
              <h2>СОЗДАЙ СВОЮ КОМАНДУ</h2>
              <p>приглашай друзей и других игроков в свою команду</p>
            </div>
          </figure>
          <figure>
            <img src={Slider3} alt="" />
            <div>
              <h2>ПОВЫШАЙ СВОЙ РАНГ</h2>
              <p>повышай ранг для игры с более опытными игроками</p>
            </div>
          </figure>
          <figure>
            <img src={Slider4} alt="" />
            <div>
              <h2>ВЕСЕЛИСЬ</h2>
              <p>получи хорошее настроение от игры с друзьями</p>
            </div>
          </figure>
        </figure>
      </div>
    );
  }
}

export default Header;

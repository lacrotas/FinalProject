import React from 'react';
import Logo from '../../assets/logoLight.png';
import Vk from '../../assets/social/vkWhite.png';
import Insta from '../../assets/social/instaWhite.png';
import Twiter from '../../assets/social/twiterWhite.png';
import Youtube from '../../assets/social/youtubeWhite.png';

import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__container--left">
          <h3 className="footer__title">Есть идеи по сайту? Пиши сюда</h3>
          <img className="footer_icon" src={Vk} alt="Vk" />
          <img className="footer_icon" src={Insta} alt="Instagram" />
          <img className="footer_icon" src={Twiter} alt="Twitter" />
          <img className="footer_icon" src={Youtube} alt="Youtube" />
        </div>
        <div className="footer__container--center">
          <img className="footer_logo" src={Logo} alt="Logo" />
          <p className="footer__paragraph">Copyright ©TeamSet 2021</p>
        </div>
        <div className="footer__container--right">
          <h3 className="footer__title">Контакты</h3>
          <p className="footer__paragraph--telephone">Телефон: +375(33)637-43-27</p>
          <p className="footer__paragraph--mail">Почта: 123123maks1@mail.ru</p>
        </div>
      </footer>
    );
  }
}
export default Footer;

import React from 'react';
import Logo from '../assets/logoLight.png';
import Vk from '../assets/social/vkWhite.png';
import Insta from '../assets/social/instaWhite.png';
import Twiter from '../assets/social/twiterWhite.png';
import Youtube from '../assets/social/youtubeWhite.png';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer-left">
          <h3>Есть идеи по сайту? Пиши сюда</h3>
          <img src={Vk} alt="" />
          <img src={Insta} alt="" />
          <img src={Twiter} alt="" />
          <img src={Youtube} alt="" />
        </div>
        <div className="footer-center">
          <img src={Logo} alt="" />
          <p>Copyright @TeamSet 2021</p>
        </div>
        <div className="footer-right">
          <h3>Контакты</h3>
          <p>Телефон: +375(33)637-43-27</p>
          <p>Почта: 123123maks1@mail.ru</p>
        </div>
      </footer>
    );
  }
}
export default Footer;

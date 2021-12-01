import '../App.scss';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

const Layout = props => {
  return (
    <Router>
      <Header />
      <main>{props.children}</main>

      <Footer />
    </Router>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};
Layout.defaultProps = {
  children: '',
};

export default Layout;
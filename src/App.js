import Header from './components/Header';
import SliderInfo from './components/SliderInfo';
import ChooseGame from './components/ChooseGame';
import Footer from './components/Footer';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <SliderInfo />
      <ChooseGame />
      <Footer />
    </div>
  );
};

export default App;

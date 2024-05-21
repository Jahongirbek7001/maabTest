import './App.css';
import Video from './components/Video/Video';
import Header from './components/Header/Header';
import Kurs from './components/Kurs/Kurs';
import Salary from './components/Salary/Salary';
import Grant from './components/Grant/Grant';
import Akademiya from './components/Akademiya/Akademiya';
import Questions from './components/Questions/Questions';
import Forma from './components/Forma/Forma';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Video />
      <Kurs />
      <Salary />
      <Grant />
      <Akademiya />
      <Questions />
      <Forma />
      <Footer />
    </>
  );
}

export default App;
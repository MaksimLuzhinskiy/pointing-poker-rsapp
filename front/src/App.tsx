import { FC } from 'react';
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';

const App: FC = () => {
  return (
    <div className="app">
      <Header />
      <Footer />
    </div>
  );
};

export default App;

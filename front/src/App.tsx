import { FC } from 'react';
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Login from './pages/login/login';
import AppRouter from './components/appRouter/AppRouter';
import openSocket from 'socket.io-client';

const App: FC = () => {
  // const socket = openSocket('https://pointing-poker-rsapp.herokuapp.com/');
  return (
    <div className="app">
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
};

export default App;

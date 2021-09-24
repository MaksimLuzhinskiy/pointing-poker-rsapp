import { FC } from 'react';
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Login from './pages/login/login';
import AppRouter from './components/appRouter/AppRouter';
import socket from './socket';

const App: FC = () => {
  return (
    <div className="app">
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
};

export default App;

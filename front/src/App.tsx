import { FC } from 'react';
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Login from './pages/login/login';
import AppRouter from './components/appRouter/AppRouter';

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

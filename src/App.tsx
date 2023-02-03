import React from 'react';
import './App.css';
import Cards from './components/Cards';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import { RootState } from '.';
import { ICard } from './types';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

function App() {
  const cards = useSelector<RootState>(state => state.cardsReducer.data) as ICard[]

  return (
    <div className="App">
      <div className='wrapper'>
        <Header />
        <Cards data={cards} />
        <Footer />
      </div>
      <Sidebar />
    </div>
  );
}

export default App;

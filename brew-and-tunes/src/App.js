import React from 'react';
import {Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage';
import Coffee from './components/coffee';
import MusicList from './components/music-list';



function App() {
  return (
    <div >
      <Routes>
        <Route exact path='/' element={ <HomePage /> } />
        <Route exact path='/coffee' element={ <Coffee /> } />
        <Route exact path='/music' element={ <MusicList /> } />
      </Routes>
    </div>
  );
}

export default App;

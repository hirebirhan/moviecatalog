import './App.css';
import React from 'react';
import Header from './shared/components/toolbar/header';
import MovieList from './shared/components/list/MovieList'

function App() {

  return (
    <div >
      <div>
        <Header />
      </div>
      <div className='container'>
        <MovieList />
      </div>


    </div >
  );
}

export default App;

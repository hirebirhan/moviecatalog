import './App.css';
import React from 'react';
import Movies from './shared/components/list/Movies';
import Header from './shared/components/toolbar/header';

function App() {

  return (
    <div >
      <div>
        <Header />
      </div>
      <div className='container'>

        <Movies />
      </div>


    </div >
  );
}

export default App;

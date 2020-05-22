import React from 'react';
import './App.scss';

import Background from './components/Background'
import Header from './components/Header'

function App() {
  return (
    <div className="App">

      <section className="background">
        <Background />
      </section>

      <header className="header">
        <Header />
      </header>

    </div>
  );
}

export default App;

import React from 'react';
import './App.scss';

import Background from './components/Background'
import Header from './components/Header'
import AboutMe from './components/AboutMe'


function App() {
  return (
    <div className="App">

      <section className="background">
        <Background />
      </section>

      <header className="header">
        <Header />
      </header>

      <section className="aboutme">
        <AboutMe />
      </section>

    </div>
  );
}

export default App;

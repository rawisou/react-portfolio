import React from 'react'

import Header from './components/Header';
import Intro from './components/Intro';
import Tech from './components/Tech';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Skills from './components/Skills';
import ForMore from './components/ForMore';
import Contact from './components/Contact';


function App() {
  return (
    <main>
      <Header />
      <Intro />
      <Tech />
      <section className='to-center'>
        <Projects />
      </section>
      <section className='to-center'>
        <Articles />
      </section>
        <Skills />
      <ForMore />
      <Contact />
    </main>
  );
}

export default App;

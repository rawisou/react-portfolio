import React from 'react'

import Header from './components/Header';
import Intro from './components/Intro';
import Tech from './components/Tech';
import FeaturedProjects from './components/FeaturedProjects';

function App() {
  return (
    <main>
      <Header />
      <Intro />
      <Tech />
      <h3>Featured projects</h3>
      <FeaturedProjects />
    </main>
  );
}

export default App;

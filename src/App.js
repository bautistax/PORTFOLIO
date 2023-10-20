import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import AllProyects from './components/Allproyects';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <About />
      <AllProyects />
      <Contact />
    </div>
  );
};

export default App;

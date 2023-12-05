import React from 'react';
// components
import Banner from './components/Banner';
import About from './components/About';
import Contact from './components/Contact';
import AllProyects from './components/Allproyects';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='bg-site2 bg-no-repeat bg-cover overflow-hidden'>
      <Banner />
      <About />
      <AllProyects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

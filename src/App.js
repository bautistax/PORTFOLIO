import React from 'react';
// components
import Banner from './components/Banner';
// import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import AllProyects from './components/Allproyects';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='bg-site2 bg-no-repeat bg-cover overflow-hidden'>
      {/* <Header /> */}
      <Banner />
      <About />
      <AllProyects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

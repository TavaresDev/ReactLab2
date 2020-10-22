import React from 'react';
import FunFact from '../shared/FunFact/FunFact';
import Header from '../shared/Header/Header';
import NavButton from '../shared/NavButton/NavButton';

// You need to import your shared header...

const Home = () => {
  return (
    <>
   
      <Header title="Home" />

      {/* You need a link to your about page as a call to action */}

      <FunFact title="Home" />


      

    </>
  );
}
 
export default Home;
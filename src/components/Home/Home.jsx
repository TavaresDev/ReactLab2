import React from 'react';
import FunFact from '../shared/FunFact/FunFact';
import Header from '../shared/Header';
import NavButton from '../shared/NavButton/NavButton';

// You need to import your shared header...

const Home = () => {
  return (
    <>
   
      <Header title="Home" xsubTitle="Developer"/>

      {/* You need a link to your about page as a call to action */}

      <FunFact title="Home" subTitle="Developer"/>


      {/* <NavButton linkTo="/about" label="Learn More "/> */}


    </>
  );
}
 
export default Home;
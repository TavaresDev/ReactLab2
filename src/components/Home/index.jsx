import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../shared/Header';

// You need to import your shared header...

const Home = () => {
  return (
    <>
      {/* <h1>Home</h1> */}
      <Header title="Home" xsubTitle="Developer"/>

      {/* You need a link to your about page as a call to action */}

      <Link to='/about'>
							About

      </Link>
    </>
  );
}
 
export default Home;
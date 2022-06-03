import React from 'react';

import Aux from '../../Auxiliary/auxiliary.js';

import './home.css';

import Nav from '../../Nav/nav';

const HomePage = () => {
  return (
    <Aux>
      <Nav getStarted="getStarted" />
      <section className="body__outer">
        <div>
          <h1 className="investment">Making Investment easier</h1>
          <p className="fin">
            FinPocket is a social investment platform for you to discuss,
            analyze and trade
          </p>
          <p className="fin">stocks on the Pakistan Stock Exchange.</p>
        </div>
        <div>
          <img
            className="myImg"
            src="https://cdn.jsdelivr.net/gh/Mahad1232/mudarba@master/src/Images/top.gif"
            alt="My Logo"
          />
        </div>
      </section>
    </Aux>
  );
};

export default HomePage;

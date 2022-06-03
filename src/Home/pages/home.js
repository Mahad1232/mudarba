import React from 'react';

import Aux from '../../Auxiliary/auxiliary.js';

import './home.css';

const HomePage = () => {
  return (
    <Aux>
      <section className="header__outer">
        <h1 className="logo">Buisness Chain</h1>
        <div className="login">
          <h3 className="login1">Login</h3>
          <h3 className="login1">Signup</h3>
        </div>
      </section>
      <section className="body__outer">
        <div>
          <h1>Making Investment easier</h1>
          <p>
            FinPocket is a social investment platform for you to discuss,
            analyze and trade stocks on the Pakistan Stock Exchange.
          </p>
        </div>
        <div>
          <img src={} alt="My Logo" />
        </div>
      </section>
    </Aux>
  );
};

export default HomePage;

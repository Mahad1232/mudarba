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
    </Aux>
  );
};

export default HomePage;

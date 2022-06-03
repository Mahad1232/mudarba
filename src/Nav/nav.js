import React from 'react';

import '../Home/pages/home.css';

const Nav = () => {
  return (
    <section className="header__outer">
      <img
        className="logo"
        src="https://finpocket.pk/wp-content/uploads/2021/11/Logo.png"
        alt="My Logo"
      />
      <div className="login">
        <h3 className="login1">Login</h3>
        <h3 className="login2">Get Started</h3>
      </div>
    </section>
  );
};

export default Nav;

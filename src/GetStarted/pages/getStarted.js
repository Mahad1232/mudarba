import React from 'react';

import Aux from '../../Auxiliary/auxiliary.js';

import Nav from '../../Nav/nav';

import './getStarted.css';

const getStartedPage = () => {
  return (
    <Aux>
      <Nav />
      <section className="getStarted__outer">
        <div className="getStarted__inner">
          <h3 className="finPock">FinPocket helps u save and invest </h3>

          <div className="outer__signup">
            <div className="choice" className="buisness">
              Buisness
            </div>
            <div className="choice" className="buisness">
              Investor
            </div>
          </div>

          <input
            name="buisnessName"
            className="buisness__signup"
            placeholder="Buisness Name"
          />
          <br />

          <input
            className="buisness__signup"
            placeholder="Category"
            name="category"
          />
          <br />

          <input className="buisness__signup" placeholder="CRO" name="cro" />
          <br />

          <input
            name="regNo"
            className="buisness__signup"
            placeholder="Reg No"
          />
          <br />

          <input
            name="regDate"
            className="buisness__signup"
            placeholder="Reg Date"
          />
          <br />

          <input
            name="ab"
            className="buisness__signup"
            placeholder="From A/B uptodate"
          />
          <br />

          <input
            name="filling"
            className="buisness__signup"
            placeholder="Mandotary Filling"
          />
          <br />

          <input
            name="logo"
            className="buisness__signup"
            placeholder="Buisness Logo"
          />
          <br />

          <input
            name="email"
            className="buisness__signup"
            placeholder="Email"
          />
          <br />

          <input
            name="phoneNo"
            className="buisness__signup"
            placeholder="Phone no"
          />
          <br />
        </div>
      </section>
    </Aux>
  );
};

export default getStartedPage;

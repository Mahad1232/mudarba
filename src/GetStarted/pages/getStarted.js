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
            <div className="buisness">Buisness</div>
            <div className="buisness">Investor</div>
          </div>
          <input className="buisness__signup" placeholder="Buisness Name" />
          <br />
          <input className="buisness__signup" placeholder="Category" />
          <br />
          <input className="buisness__signup" placeholder="CRO" />
          <br />
          <input className="buisness__signup" placeholder="Reg No" />
          <br />
          <input className="buisness__signup" placeholder="Reg Date" />
          <br />
          <input className="buisness__signup" placeholder="From A/B uptodate" />
          <br />
          <input className="buisness__signup" placeholder="Mandotary Filling" />
          <br />
          <input className="buisness__signup" placeholder="Buisness Logo" />
          <br />
          <input className="buisness__signup" placeholder="Email" />
          <br />
          <input className="buisness__signup" placeholder="Phone no" />
        </div>
      </section>
    </Aux>
  );
};

export default getStartedPage;

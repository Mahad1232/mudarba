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
        </div>
      </section>
    </Aux>
  );
};

export default getStartedPage;

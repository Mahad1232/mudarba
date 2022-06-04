import React from 'react';

import Aux from '../../Auxiliary/auxiliary.js';

import Nav from '../../Nav/nav';

import './getStarted.css';

const getStartedPage = (props) => {
  return (
    <Aux>
      <Nav />
      <section className="getStarted__outer">
        <div className="getStarted__inner">
          <h3 className="finPock">FinPocket helps u save and invest </h3>
          <div className="outer__signup">
            <div
              className="choice"
              className="buisness"
              value={props.user.choice}
            >
              Buisness
            </div>
            <div
              className="choice"
              className="buisness"
              value={props.user.choice}
            >
              Investor
            </div>
          </div>
          <input
            name="buisnessName"
            onChange={props.changeHandler}
            value={props.user.buisnessName}
            className="buisness__signup"
            placeholder="Buisness Name"
          />
          <br />
          <input
            className="buisness__signup"
            onChange={props.changeHandler}
            value={props.user.category}
            placeholder="Category"
            name="category"
          />
          <br />
          <input
            className="buisness__signup"
            onChange={props.changeHandler}
            value={props.user.cro}
            placeholder="CRO"
            name="cro"
          />
          <br />
          <input
            name="regNo"
            onChange={props.changeHandler}
            value={props.user.regNo}
            className="buisness__signup"
            placeholder="Reg No"
          />
          <br />
          <input
            name="regDate"
            onChange={props.changeHandler}
            value={props.user.regDate}
            className="buisness__signup"
            placeholder="Reg Date"
          />
          <br />
          <input
            name="ab"
            onChange={props.changeHandler}
            value={props.user.ab}
            className="buisness__signup"
            placeholder="From A/B uptodate"
          />
          <br />
          <input
            name="filling"
            onChange={props.changeHandler}
            value={props.user.filling}
            className="buisness__signup"
            placeholder="Mandotary Filling"
          />
          <br />
          <input
            name="logo"
            onChange={props.changeHandler}
            value={props.user.logo}
            className="buisness__signup"
            placeholder="Buisness Logo"
          />
          <br />
          <input
            name="email"
            onChange={props.changeHandler}
            value={props.user.email}
            className="buisness__signup"
            placeholder="Email"
          />
          <br />
          <input
            name="phoneNo"
            onChange={props.changeHandler}
            value={props.user.phoneNo}
            className="buisness__signup"
            placeholder="Phone no"
          />
          <br />
          <div class="post" onClick={props.postData}>
            Signup
          </div>
          <br />
        </div>
      </section>
    </Aux>
  );
};

export default getStartedPage;

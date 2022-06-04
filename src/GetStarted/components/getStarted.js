import React, { useState } from 'react';

import GetStartedPage from '../pages/getStarted';

const getStarted = () => {
  const [user, setUser] = useState({
    choice: '',
    buisnessName: '',
    category: '',
    cro: '',
    regNo: '',
    regDate: '',
    ab: '',
    filling: '',
    logo: '',
    email: '',
    phoneNo: '',
  });

  let name, value;

  const changeHandler = (event) => {
    event.preventDefault();
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = () => {
    console.log(user);
  };

  const buisnessChoice = () => {
    setUser({ ...user, choice: 'Buisness' });
  };

  const investorChoice = () => {
    setUser({ ...user, choice: 'Investor' });
  };

  return (
    <GetStartedPage
      user={user}
      changeHandler={changeHandler}
      postData={postData}
      buisnessChoice={buisnessChoice}
      investorChoice={investorChoice}
    />
  );
};

export default getStarted;

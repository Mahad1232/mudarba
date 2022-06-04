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

  return (
    <GetStartedPage
      user={user}
      changeHandler={changeHandler}
      postData={postData}
    />
  );
};

export default getStarted;

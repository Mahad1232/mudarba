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

    event.preventDefault();

    const 
    {
      choice,buisnessName,category,cro,regNo,regDate,
      ab,filling,logo,email,phoneNo
    } = user;

    await fetch("/buisness", {
            //Setting Method
            method:"POST",

            //Setting Headers
            headers:{
                //Setting Content-Type
                "Content-Type" : "application/json"
            },
            //Stringifying the email and password and storing it into body
            body:JSON.stringify({
              choice,buisnessName,category,cro,regNo,regDate,
              ab,filling,logo,email,phoneNo
            })
        })
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

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

  return <GetStartedPage />;
};

export default getStarted;

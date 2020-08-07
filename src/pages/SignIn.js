import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import Loader from 'react-loader-spinner';

const SignIn = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock API request to get list data
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />;
  }

  return (
    <>
      <div>Sign In Page</div>
      <Link to="/">Back</Link>
    </>
  );
};

export default SignIn;

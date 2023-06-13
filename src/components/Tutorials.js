import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tutorials = () => {
  const navigate = useNavigate();

  const redirect = () => {
    navigate('/');
  };

  setTimeout(redirect, 5000);

  return (
    <div className="container mt-3">
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Oups!</strong> This page is under construction.
            You will redirected to the Docs page in 5 seconds
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        <h1>Tutorial: Intro to React</h1>
    </div>
  );
}

export default Tutorials;

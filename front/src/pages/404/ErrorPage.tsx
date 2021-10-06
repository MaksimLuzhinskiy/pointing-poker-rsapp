import React from 'react';
import './ErrorPage.scss';

const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="error-wrap">
        <div className="error-page__title">404</div>
        <a href="/login">On login page</a>
      </div>
    </div>
  );
};

export default ErrorPage;

import React from 'react';
import './SignIn.css';

const SignIn = () => {
  return (
    <div className="signin-page">
      <div className="signin-box">
        <h2>Sign In</h2>

        <label>Email address</label>
        <input type="email" placeholder="Enter email" />

        <label>Password</label>
        <input type="password" placeholder="Enter password" />

        <div className="options">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#">Forgot <span>password?</span></a>
        </div>

        <button type="submit">Submit</button>
      </div>
    </div>
  );
};

export default SignIn;

import React from "react";
import "./Login.css";
function Login() {
  return (
    <div className="body">
      <div className="container">
        <div className="login-box">
          <h2>Sign In</h2>
          <form>
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" placeholder="Enter email" required />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              required
            />
            <div className="remember-forgot">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <span>
                Forgot <span>password?</span>
              </span>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;

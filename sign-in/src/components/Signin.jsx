import './Signin.css'
import fbImage from '../assets/fb.png'; 
import linkedinImage from '../assets/linkedin.png';
import twitterImage from '../assets/twitter.png';
import React from 'react';
import { Link } from 'react-router-dom';

export default function SignIN() {
    
    return (
        <>
      <div className="container-login">
        <div className="header-login">
          <div className="header-login-box">
            {/* The commented-out elements */}
          </div>
        </div>
        <div className="login-box">
          <div className="login">
            <h1>Sign in</h1>
            <input className="user-input" id="username" type="text" placeholder="Username" />
            <label htmlFor="username" className="login-input-icon">
              <i className="fa fa-user"></i>
            </label>
            <input className="user-input" id="password" type="password" placeholder="Password" />
            <label htmlFor="password" className="login-input-icon">
              <i className="fa fa-lock"></i>
            </label>
            <div className="login-remember">
              <label className="login-checkbox">
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <span className="login-remember-text">
                &nbsp;&nbsp;Remember me
              </span>
              <span className="forgot-password">
        <Link to="/forgot-password">Forgot your password?</Link>
      </span>
            </div>
            <button>Login</button>
            <div className="not-registered center-text">
              <p>Not Registered? <a href="#">Create an Account</a></p>
            </div>
            <span className="login-separator"></span>
            <div className="login-social-media">
                
                <img src={fbImage} alt="Facebook" width="50px" height="50px" />
                <img src={linkedinImage} alt="Linkedin" width="50px" height="50px" />
                <img src={twitterImage} alt="Twitter" width="50px" height="50px" />
          </div>
          </div>
        </div>
      </div>
        </>
    );
}
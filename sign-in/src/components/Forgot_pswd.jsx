import React from 'react';
import { Link } from 'react-router-dom';
import './Signin.css'
import fbImage from '../assets/fb.png'; 
import linkedinImage from '../assets/linkedin.png';
import twitterImage from '../assets/twitter.png';


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
            <h1>Forgot Password</h1>
            <input className="user-input" id="username" type="text" placeholder="Username" />
            <label htmlFor="username" className="login-input-icon">
              <i className="fa fa-user"></i>
            </label>
            <input className="user-input" id="password" type="password" placeholder="New Password" />
            <label htmlFor="password" className="login-input-icon">
              <i className="fa fa-lock"></i>
            </label>
            <input className="user-input" id="new-password" type="password" placeholder="Re Enter Password" />
            <label htmlFor="new-password" className="login-input-icon">
              <i className="fa fa-lock"></i>
            </label>

            <button>Change Password</button>
            
            <span className="login-separator"></span>
            <div className="not-registered center-text">
        <p>
          Remembered your password? <Link to="/">Sign in</Link>
        </p>
      </div>

          </div>
        </div>
      </div>
        </>
    );
}
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom';
import { signUp } from '../../store/session';
import {MdOutlineCancelPresentation} from "react-icons/md"
import icon from "./icon.png"

import "./SignUpForm.css"
import "../LoginForm/LoginForm.css"

const SignUpForm = ({closeModal}) => {
  const history = useHistory()
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const dispatch = useDispatch();

  useEffect(() => {
    let errors = [];
    if(!username.length) errors.push("Please enter a username.")
    if(!email.length) errors.push("Please enter a email.")
    if(!password.length) errors.push("Please enter a password.")
    if(!repeatPassword.length) errors.push("Please repeat the entered password.")
    if(password !== repeatPassword) errors.push("Please have password and repeated password match.")
    setErrors(errors)
  }, [email, password, username, repeatPassword])

  const onSignUp = async (e) => {
    e.preventDefault();

    setHasSubmitted(true)

    if(errors.length > 0) return; 
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    }
    history.push("/home")
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/home' />;
  }

  const onCancel = (e) => {
    e.preventDefault()
    closeModal()
  }

  return (
    <>
    <MdOutlineCancelPresentation className="cancel-button" onClick={onCancel}/>
    <div className="login-box">
      <form onSubmit={onSignUp} className="login-form">
        <div className="inside-login">
          <img src={icon} className="icon"></img>
          <h2 className="login header signup">Sign Up</h2>
          <div>
            {hasSubmitted && errors.map((error, ind) => (
              <div key={ind} className="errors">{error}</div>
            ))}
          </div>
          <div className="center-login">
            <div className="login-labels">
              <label className="signup">User Name</label>
              <input
                type='text'
                name='username'
                onChange={updateUsername}
                value={username}
                className="signup-input"
              ></input>
            </div>
            <div className="login-labels">
              <label className="signup">Email</label>
              <input
                type='text'
                name='email'
                onChange={updateEmail}
                value={email}
                className="signup-input"
              ></input>
            </div>
            <div className="login-labels">
              <label className="signup">Password</label>
              <input
                type='password'
                name='password'
                onChange={updatePassword}
                value={password}
                className="signup-input"
              ></input>
            </div>
            <div className="login-labels">
              <label className="signup">Repeat Password</label>
              <input
                type='password'
                name='repeat_password'
                onChange={updateRepeatPassword}
                value={repeatPassword}
                className="signup-input"
              ></input>
            </div>
            <button type='submit' className="login-button">Sign Up</button>
          </div>
        </div>
      </form>
    </div>
    </>
  );
};

export default SignUpForm;

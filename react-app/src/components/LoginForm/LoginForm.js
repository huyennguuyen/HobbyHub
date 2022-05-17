import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import { login } from '../../store/session';
import SignUpFormModal from '../SignUpForm/SignUpFormModal';
import icon from "./icon.png"
import "./LoginForm.css"

const LoginForm = () => {
  const history = useHistory()
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const [hasClicked, sethasClicked] = useState(false)

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }

    history.push("/home")
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const submitting = (e) => {
    e.preventDefault()

    hasClicked(false)


  }

  if (user) {
    return <Redirect to='/home' />;
  }


  return (
    <>
    <div className="login-box">
      <form onSubmit={onLogin} className="login-form">
        <div className="inside-login">
          <img src={icon} className="icon"></img>
          <h2 className="login header">Log in</h2>
          <div>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div className="center-login">
            <div className="login-labels">
              <label htmlFor='email' className="login text">Email</label>
              <input
                name='email'
                type='text'
                value={email}
                onChange={updateEmail}
                className="login-input first"
              />
            </div>
            <div className="login-labels">
              <label htmlFor='password' className="login text">Password</label>
              <input
                name='password'
                type='password'
                value={password}
                onChange={updatePassword}
                className="login-input second"
              />
            </div>  
              <button type='submit' className="login-button">Login</button>
          </div>
        </div>
      </form>
    </div>
    </>
  );
};

export default LoginForm;

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import { login } from '../../store/session';
import SignUpFormModal from '../SignUpForm/SignUpFormModal';
import {MdOutlineCancelPresentation} from "react-icons/md"
import { Modal } from '../context/Modal';
import icon from "./icon.png"
import "./LoginForm.css"

const LoginForm = ({closeModal}) => {
  const history = useHistory()
  const [errors, setErrors] = useState([]);
  // const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const [hasSubmitted, setHasSubmitted] = useState(false)

  useEffect(() => {
    let errors = [];
    if(!email.length) errors.push("Please enter a email.")
    if(!password.length) errors.push("Please enter a password.")
    setErrors(errors)
  }, [email, password])

  // useEffect(() => {
  //   let errors = [];
  //   if(!email.length) errors.push("Please enter a email.")
  //   if(!password.length) errors.push("Please enter a password.")
  //   setErrors(errors)
  // }, [email, password])

  



  const onLogin = async (e) => {
    e.preventDefault();

    
    setHasSubmitted(true)

    if (errors.length > 0) return;
    
    const data = await dispatch(login(email, password));
    if (data) {
      // errors.push(data)
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


  if (user) {
    return <Redirect to='/home' />;
  }

  const onCancel = (e) => {
    e.preventDefault()
    closeModal()

  }


  return (
    <>
    <img src="https://res.cloudinary.com/daeopbcax/image/upload/v1667352522/Huyen/cancel_ywptyy.png" className="cancel-button pointer" onClick={onCancel}></img>
    <div className="login-box">
      <form onSubmit={onLogin} className="login-form">
        <div className="inside-login">
          <img src={icon} className="icon"></img>
          <h2 className="login header">Log in</h2>
          <div>
            {hasSubmitted && errors.map((error, ind) => (
              <div key={ind} className="errors">{error}</div>
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
              <button type='submit' className="login-button pointer">Login</button>
          </div>
        </div>
      </form>
    </div>
    </>
  );
};

export default LoginForm;

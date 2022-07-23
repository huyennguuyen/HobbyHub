
import LogoutButton from '../auth/LogoutButton';
import LoginFormModal from "../LoginForm/LoginFormModal";
import SignUpFormModal from "../SignUpForm/SignUpFormModal";
import DemoUser from '../auth/DemoUser';
import SearchBar from "../SearchBar";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, NavLink } from "react-router-dom";
import * as groupActions from "../../store/group"
import "./NavBar.css"


const NavBar = () => {
  const dispatch = useDispatch()
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  const groupState = useSelector(state => state.groups)
  const groups = Object.values(groupState)
  console.log("this is groups search--------", groups)

  useEffect(async() => {
      if (!sessionUser) history.push('/')
      if (sessionUser) await dispatch(groupActions.getAllGroups(sessionUser.id))
  }, [sessionUser])

  return (
    <>
    {sessionUser ?
      <>
        <div className="outside-nav">
          <div className="container-nav">
            <nav className="session-user-nav">
              <div className="nav-left">
                  <NavLink to='/home' exact={true} activeClassName='active pointer' id="logo">
                    Hobby Hub
                  </NavLink>
              </div>
              <SearchBar/>
              <div className="nav-right-main">
                <NavLink to="/groups/new" exact={true} activeClassName="active pointer" id="right">
                  Start a New Group 
                </NavLink>
                <NavLink to="/home" exact={true} activeClassName="active pointer" id="right">
                  All Groups
                </NavLink>
                <NavLink to="/my-created-groups" exact={true} activeClassName="active pointer" id="right">
                  My Created Groups
                </NavLink>
                <LogoutButton />
              </div>
            </nav>
          </div>
        </div>
      </>:
      <>
      <div className="outside-nav">
        <div className="container-nav"> 
          <nav className="not-session-user-nav">
              <div className="nav-left">
                  <NavLink to='/' exact={true} activeClassName='active pointer' id="logo">
                    Hobby Hub
                  </NavLink>
              </div>
              <div className="nav-right">
                  <LoginFormModal/>
                  <SignUpFormModal />
                  <DemoUser />
              </div>
          </nav>
        </div>
      </div>
      </>
    }
    </>
  );
}

export default NavBar;

// import React from 'react';
// import { NavLink } from 'react-router-dom';
// // import LogoutButton from '../auth/LogoutButton';
// import { useSelector } from "react-redux";
// import DemoButton from '../auth/DemoUser';
// import LoginFormModal from '../LoginFormModal';
// import ProfileButton from './ProfileButton';
// import SignUpFormModal from '../SignUpModal';
// import AddATripModal from '../AddATripModal';
// // import { login } from '../../store/session';

// const NavBar = () => {
//   const user = useSelector(state => state.session.user);

//   let sessionLinks;
//   if (user) {
//     sessionLinks = (
//       <ul className="logged-in-nav">
//         <li className="nav button1">
//           <AddATripModal/>
//         </li>
//         {/* <NavLink to={`/users/${user.id}`}>User Profile</NavLink> */}
//         <li className="nav button2">
//           <NavLink to="/Home" exact={true} className="trips">
//             Trips
//           </NavLink>
//         </li>
//         {/* <li className="nav-list">
//           <LogoutButton />
//         </li> */}
//         <li className="nav button3">
//           <ProfileButton/>
//         </li>
//       </ul>
//     );
//   } else {
//     sessionLinks = (
//       <ul className="logged-out-nav">
//         <li className="nav button1">
//           <DemoButton />
//         </li>
//         <li className="nav button2">
//           <LoginFormModal />
//         </li>
//         <li className="nav button3">
//           <SignUpFormModal/>
//         </li>
//         {/* <NavLink to='/sign-up' exact={true} activeClassName='active'>
//           Sign Up
//         </NavLink> */}
//       </ul>
//     );
//   }

//   return (
//     <nav className="nav-container">
//       <ul className="nav-bar-left">
//         <li className="nav-list">
//           <NavLink to='/Home' exact={true} className="nav-link">
//             <img src="/icon.png" className="icon" alt="Travel Bucket Icon" />
//             <h2 id="travel">Travel Bucket</h2>
//           </NavLink>
//         </li>
//       </ul>
//       <ul className="nav-bar-right">
//         <li>{sessionLinks}</li>
//       </ul>
//     </nav>
//   );
// }

// export default NavBar;



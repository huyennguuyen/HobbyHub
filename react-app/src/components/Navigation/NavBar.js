import { useSelector } from "react-redux"
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import LoginFormModal from "../LoginForm/LoginFormModal";
import SignUpFormModal from "../SignUpForm/SignUpFormModal";
import DemoUser from '../auth/DemoUser';
import "./NavBar.css"


const NavBar = () => {

  const sessionUser = useSelector(state => state.session.user);

  return (
    <>
    {sessionUser ?
      <>
        <div className="outside-nav">
          <div className="container-nav">
            <nav className="session-user-nav">
              <div className="nav-left">
                  <NavLink to='/home' exact={true} activeClassName='active'>
                    Home
                  </NavLink>
              </div>
              <div className="nav-right">
                <NavLink to="/groups/new" exact={true} activeClassName="active">
                  Start a New Group 
                </NavLink>
                <NavLink to="/my_groups" exact={true} activeClassName="active">
                  My Groups
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
                  <NavLink to='/' exact={true} activeClassName='active'>
                    Home
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

{/* <li>
<NavLink to='/users' exact={true} activeClassName='active'>
  Users
</NavLink>
</li> */}

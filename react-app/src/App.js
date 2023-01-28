import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/LoginForm/LoginForm';
import SignUpForm from './components/SignUpForm/SignUpForm';
import NavBar from './components/Navigation/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import GroupFormPage from './components/GroupFormPage';
import Home from './components/Home';
import SingleGroup from './components/SingleGroupPage';
import UploadGroup from './components/GroupFormPage/UploadGroup';
import MyGroups from "./components/MyGroups"
import SplashPage from './components/SplashPage';
import SignUpFormModal from './components/SignUpForm/SignUpFormModal';
import Footer from "./components/Footer"

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpFormModal />
        </Route>
        <ProtectedRoute path='/' exact={true}>
          <SplashPage />
        </ProtectedRoute>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/home' exact={true} >
          <Home />
        </ProtectedRoute>
        <ProtectedRoute path="/groups/new">
          {/* <GroupFormPage /> */}
          <UploadGroup />
        </ProtectedRoute>
        <ProtectedRoute path="/groups/:groupId">
          <SingleGroup/>
        </ProtectedRoute>
        <ProtectedRoute path="/my-created-groups"> 
          <MyGroups />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

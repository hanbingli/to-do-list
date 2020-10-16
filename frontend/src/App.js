import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Axios from 'axios';
import './App.css';

import NavBar from './components/navBar/NavBar';
import MainPage from './components/mainPage/MainPage';
import LoginModal from './components/modals/LoginModal';
import RegisterModal from './components/modals/RegisterModal';
import AddItemModal from './components/modals/AddItemModal';

import AuthContext from './context/AuthContext';



function App() {
  
  // const [userData, setUserData] = useState({
  //   token: undefined,
  //   user: undefined,
  // });

  // useEffect(()=>{
  //   const checkLoggedIn = async () =>{
  //     const token = localStorage.getItem('auth-token');

  //   }

  // }, [])

  return (
    <Router>
      <UserContext.Provider value = { userData, setUserData}>
      <Switch>
        <NavBar />
        <MainPage />
      {/* <Route path = "/" exact>
        
      </Route> */}
      {/* <Route path = "/users/login" exact>
          <LoginModal />
      </Route>
      <Route path = "/users/register" exact>
          <RegisterModal />
      </Route>
      <Route path = "/items/register" exact>
          <RegisterModal />
      </Route> */}
      </Switch>
      </UserContext.Provider>
    </Router>
   
  );
}

export default App;

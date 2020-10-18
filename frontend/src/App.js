import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';

import NavBar from './components/navBar/NavBar';
import MainPage from './components/mainPage/MainPage';


import { AuthContext } from './context/AuthContext';
import { useAuth } from './hooks/auth-hook'



function App() {

  const { token, login, logout, userId } = useAuth();

  return (
    <Router>
      <AuthContext.Provider 
       value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
      >
      <Switch>
       <Route path="/" exact>
        <NavBar />
        <MainPage />
        </Route>
      </Switch>
      </AuthContext.Provider>
    </Router>
   
  );
}

export default App;

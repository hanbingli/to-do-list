import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';

import NavBar from './components/navBar/NavBar';
import MainPage from './components/mainPage/MainPage';


import { AuthContext } from './context/AuthContext';
import { SearchContext } from './context/SearchContext';

import { useAuth } from './hooks/auth-hook'



function App() {

  const { token, login, logout, userId } = useAuth();

  const [searchInputValue, setSearchInputValue ] = useState(null);



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
        <SearchContext.Provider
        value={{
          searchInput:searchInputValue,
          searchInputHandler: setSearchInputValue
        }}
      >
      <Switch>
       <Route path="/" exact>
        <NavBar />
        {token && <MainPage />}
 
        </Route>
      </Switch>
      </SearchContext.Provider>
      </AuthContext.Provider>
    </Router>
   
  );
}

export default App;

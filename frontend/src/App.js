import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './App.css';

import NavBar from './components/navBar/NavBar';
import MainPage from './components/mainPage/MainPage';
import SearchResult from './components/mainPage/SearchResult'



import { AuthContext } from './context/AuthContext';
import { SearchContext } from './context/SearchContext';

import { useAuth } from './hooks/auth-hook'



function App() {


  const { token, login, logout, userId } = useAuth();

  const [searchInputValue, setSearchInputValue] = useState(null);
  const [onComponentChange, setOnComponentChange] = useState(false);
  const history = useHistory();

  const componentChangeHandler = () =>{
    setOnComponentChange(!onComponentChange)
  }


  let routes;

  if (token) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <MainPage onChange={componentChangeHandler} />
        </Route>
        <Route path="/search" exact>
          <SearchResult onChange={componentChangeHandler}/>
        </Route>
      </Switch>
    )
  }else{
    routes = (
      <Switch>
        <Route path="/" exact>
          <div className="welcomePage">
            <h2 className='welcomePage1'>Please Login or Register</h2>
            <h2 className='welcomePage2'>to manage your day.</h2>
          </div>
        </Route>
      </Switch>
    )
  }



  return (
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
          searchInput: searchInputValue,
          searchInputHandler: setSearchInputValue
        }}
      >
        <Router history = {history}>
          <NavBar onChange={componentChangeHandler}/>
          <main>{routes}</main>
        </Router>
      </SearchContext.Provider>
    </AuthContext.Provider>


  );
}

export default App;

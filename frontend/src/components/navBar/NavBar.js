import React, { useState, useContext } from 'react';
import {  Link } from "react-router-dom";
import './NavBar.css';
import logo2 from '../images/logo2.png';


import AddItem from './AddItem';
import SearchBar from './SearchBar';
import LoginButton from './LoginButton';
import RegisterButton from './RegisterButton';
import AddItemModal from '../modals/AddItemModal'
import Backdrop from '../modals/Backdrop'
import LoginModal from '../modals/LoginModal';
import RegisterModal from '../modals/RegisterModal';
import { AuthContext } from '../../context/AuthContext';
import { PromiseProvider } from 'mongoose';




const NavBar = (props) =>{
    const auth = useContext(AuthContext);
    const token = auth.token;

    const [addItemModalOpen, setAddItemModalOpen] =useState(false);
    const [loginModalOpen, setLoginModalOpen] =useState(false);
    const [registerModalOpen, setRegisterModalOpen] =useState(false);

    const addItemHandler = () =>{
        setAddItemModalOpen(true)
    }

    const loginHandler = () => {
        setLoginModalOpen(true);
    }

    const registerHandler = () => {
        setRegisterModalOpen(true);
    }

    const onCancel = () =>{
        setAddItemModalOpen(false);
        setLoginModalOpen(false);
        setRegisterModalOpen(false);
    }

    const closeLoginModel = () =>{
        setLoginModalOpen(false)
    }

    const closeRegisterModel = () =>{
        setRegisterModalOpen(false)
    }

    const closeAddItemModel = () =>{
        setAddItemModalOpen(false)
    }




    return(
        <React.Fragment>
            {addItemModalOpen && <Backdrop onClick={onCancel} />}
            {addItemModalOpen && <AddItemModal switch={closeAddItemModel} onChange={props.onChange}/>}

            {loginModalOpen && <Backdrop onClick={onCancel} />}
            {loginModalOpen && <LoginModal switch={closeLoginModel} />}
           

            {registerModalOpen && <Backdrop onClick={onCancel} />}
            {registerModalOpen && <RegisterModal switch={closeRegisterModel} />}

            <div className="headerBox">
                <div className='logoBox'>
                     <Link to="/">
                    <img className="logo2" src={logo2} alt='logo_TV2Z'  />
                   </Link>
                </div>

                <div className ="searchBarContainer">
                {!token && <h2 className = 'bannerPhrase'>Plan your day with TV2Z</h2>

                }
                {token && (
                      <SearchBar />
                    )}
                </div>
                <div className ="addItemContainer">
                    {token &&  <AddItem onClick={addItemHandler}  /> }
                   
                </div>
                {!auth.isLoggedIn && (
                <div className ="buttonContainer">
                    <LoginButton onClick={loginHandler} />
                </div>
                )}
                 {!auth.isLoggedIn && (
                <div className ="buttonContainer">
                    <RegisterButton onClick={registerHandler} />
                </div>
                 )}
                 {auth.isLoggedIn && (
                <div className ="buttonContainer">
                    <button className = "logoutButton" onClick = {auth.logout}>LOG OUT</button>
                </div>
                 )}
            

            </div>
      </React.Fragment>
    )
}

export default NavBar;
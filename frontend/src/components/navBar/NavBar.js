import React, { useState } from 'react';
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



const NavBar = () =>{

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



    return(
        <React.Fragment>
            {addItemModalOpen && <Backdrop onClick={onCancel} />}
            {addItemModalOpen && <AddItemModal  />}

            {loginModalOpen && <Backdrop onClick={onCancel} />}
            {loginModalOpen && <LoginModal  />}

            {registerModalOpen && <Backdrop onClick={onCancel} />}
            {registerModalOpen && <RegisterModal  />}

            <div className="headerBox">
                <div className='logoBox'>
                    <img className="logo2" src={logo2} alt='logo_TV2Z' />
                </div>
                <div className ="searchBarContainer">
                    <SearchBar />
                </div>
                <div className ="addItemContainer">
                    <AddItem onClick={addItemHandler} />
                </div>
                <div className ="loginButtonContainer">
                    <LoginButton onClick={loginHandler} />
                </div>
                <div className ="registerButtonContainer">
                    <RegisterButton onClick={registerHandler} />
                </div>
            

            </div>
      </React.Fragment>
    )
}

export default NavBar;
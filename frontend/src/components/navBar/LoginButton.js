import React, {useState} from 'react';

import './LoginButton.css';
import LoginModal from '../modals/LoginModal'



const LoginButton = props =>{
   


    return(
                <button
                    className="loginButton"
                    onClick={props.onClick}>
                     Login 
                </button>

    )
}

export default LoginButton;
import React from 'react';

import './LoginButton.css';

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
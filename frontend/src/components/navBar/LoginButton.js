import React from 'react';


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
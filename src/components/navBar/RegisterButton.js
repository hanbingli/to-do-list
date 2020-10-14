import React from 'react';

import './RegisterButton.css';


const RegisterButton = props =>{



    return(
            <button
                className="registerButton"
                onClick={props.onClick}>
                 Register 
            </button>



    )
}

export default RegisterButton;
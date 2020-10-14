import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';


import './RegisterModal.css';

const RegisterModal = props => {
    return (
        <div className='registerModal__container'>
       <h1>Register</h1>
        <form className ='registerModal__form'
        //   onSubmit={
        //     props.onSubmit ? props.onSubmit : event => event.preventDefault()
        //   }
        >
         <div className='field field_email'>   
            <label class='label' for='email'>Email</label>   
            <input type='email' name='email' class='input input_email'/>
        </div>
        <div className='field field_password'>   
            <label class='label' for='password'>Password</label>   
            <input type='email' name='email' class='input input_email'/>
        </div>

        <button onclick='' className='registerSubmitButton'>Register</button>
        </form>
      </div>
 
    );
  };

export default RegisterModal;
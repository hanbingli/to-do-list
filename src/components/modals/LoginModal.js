import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';


import './LoginModal.css';

const LoginModal = props => {
    return (
        <div className='loginModal__container'>
       <h1>Login</h1>
        <form className ='loginModal__form'
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

        <button onclick='' className='loginSubmitButton'>Login</button>
        </form>
      </div>
 
    );
  };

export default LoginModal;
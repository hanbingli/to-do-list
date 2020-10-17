import React, { Component, useState }  from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';


import './RegisterModal.css';

const RegisterModal = props => {

  const [inputData, setInputData] = useState({
    name:'',
    email: '', 
    password:''
  })

  const inputChangeHandler =(event)=>{
    const value = event.target.value
    setInputData({ 
      ...inputData,
      [event.target.name]: value

    });
  }

  const submitHandler = (event) =>{
    event.preventDefault();
    console.log(inputData)

  }

    return (
        <div className='registerModal__container'>
       <h1>Register</h1>
        <form className ='registerModal__form'
         onSubmit={submitHandler}
        >
          <div className='field field_name'>   
            <label class='label' for='name'>Name</label>   
            <input type='text' name='name' class='input input_name' 
            value = {inputData.name} onChange={inputChangeHandler}/>
        </div>
         <div className='field field_email'>   
            <label class='label' for='email'>Email</label>   
            <input type='email' name='email' class='input input_email'
            value = {inputData.email} onChange={inputChangeHandler}/>
        </div>
        <div className='field field_password'>   
            <label class='label' for='password'>Password</label>   
            <input type='password' name='password' class='input input_password'
            value = {inputData.password} onChange={inputChangeHandler}/>
        </div>

        <button type="submit" className='registerSubmitButton'>Register</button>
        </form>
      </div>
 
    );
  };

export default RegisterModal;
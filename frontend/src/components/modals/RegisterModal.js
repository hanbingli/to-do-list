import React, { Component, useState }  from 'react';



import './RegisterModal.css';

const RegisterModal = props => {

  const [error, setError] = useState(null)

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

  const submitHandler = async (event) =>{
    event.preventDefault();
    console.log(inputData)

    try{
      const response = await fetch('http://localhost:5000/api/users/signup', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({
          name: inputData.name, 
          email: inputData.email, 
          password: inputData.password
        })
      })

      const responseData= await response.json();
      
      console.log(responseData)
      props.switch()
      alert('Sign up successfully, please turn to login')

    }catch(err){
      console.log(err);
      setError(err.message || 'Something went wrong, please try again')


    }

   

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
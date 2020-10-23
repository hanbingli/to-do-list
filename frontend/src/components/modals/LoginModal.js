import React, {  useState, useContext }  from 'react';
import { AuthContext } from '../../context/AuthContext';




import './LoginModal.css';

const LoginModal = props => {

  const auth = useContext(AuthContext);

  const [error, setError] = useState(null)

  const [inputData, setInputData] = useState({
    email: '', 
    password:''
  })

  const inputChangeHandler =(event)=>{
    const value = event.target.value
    setInputData({ 
      ...inputData,
      [event.target.name]: value

    })

  }
//   In addition to getting the value from the event target, we get the name of that target as well. This is the essential point for handling multiple input fields with one handler. We funnel all changes through that one handler but then distinguish which input the change is coming from using the name.

// This example is using [evt.target.name], with the name in square brackets, to create a dynamic key name in the object. Because the form name props match the state property keys, the firstName input will set the firstName state and the lastName input will separately set the lastName state.

// Also note that, because we are using a single state object that contains multiple properties, we're spreading (...state) the existing state back into the new state value, merging it manually, when calling setState. This is required when using React.useState in the solution.


  const submitHandler = async (event) =>{
    event.preventDefault();
    console.log(inputData);


    try{
      const response = await fetch(`${process.env.REACT_APP_ASSET_URL}/api/users/login`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({
          email: inputData.email, 
          password: inputData.password
        })
      })

      const responseData= await response.json();
      console.log(responseData)
      auth.login(responseData.userId, responseData.token);
      if(responseData.message){
        alert(`${responseData.message}`)
      }else{
        alert('Logged in successfully.')
      }
      console.log(auth)
      props.switch()
    
 

    }catch(err){
      console.log(err)
      setError(err.message || 'Something went wrong, please try again')

    }


  }

    return (
        <div className='loginModal__container'>
       <h2>Login</h2>
        <form className ='loginModal__form'
          onSubmit={submitHandler}
        >
         <div className='field field_email'>   
            <label >Email: </label>   
            <input type='email' name='email' className='input input_email' 
            value = {inputData.email} onChange={inputChangeHandler}/>
        </div>
        <div className='field field_password'>   
            <label >Password: </label>   
            <input type='password' name='password' className='input input_password' 
            value = {inputData.password} onChange={inputChangeHandler}/>
        </div>

        <button type='submit' className='loginSubmitButton' >Login</button>
        </form>
      </div>
 
    );
  };

export default LoginModal;
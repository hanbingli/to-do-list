import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import AddItemButtons from './modalButtons/AddItemButtons';


import './AddItemModal.css';


const AddItemModal = props =>{
    
    const [inputData, setInputData] = useState({
        taskName: '', 
        taskDate: undefined,

      })
    
      const inputChangeHandler =(event)=>{
        const value = event.target.value
        setInputData({ 
          ...inputData,
          [event.target.name]: value
    
        })
    };

    const submitHandler = async (event) =>{
        event.preventDefault();
        console.log(inputData)

    // try{
    //   const response = await fetch('http://localhost:5000/api/users/signup', {
    //     method: 'POST', 
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }, 
    //     body: JSON.stringify({
    //       title: inputData.taskName, 
    //       date: inputData.taskDate, 
    //     })
    //   })

    //   const responseData= await response.json();
      
    //   console.log(responseData)

    // }catch(err){
    //   console.log(err)

    // }


    
      }

    return (

            <div className="addItemModal__container">
                <form className='addItemForm' method='post' onSubmit={submitHandler}>
                    <div className='addItemForm__taskNameContainer'>
                        <input type ="text" name='taskName' placeholder='Add a task' 
                         value = {inputData.taskName} onChange={inputChangeHandler}/>
                    </div>
                    <div className='addItemForm__taskButtonsContainer'>
                        <div className='taskDate'>
                            <input type ="date" name='taskDate' 
                             value = {inputData.taskDate} onChange={inputChangeHandler}/>
                        </div>
                        <div className='addTag addTaskButtonBox' >
                            <AddItemButtons >
                                Add a Tag
                            </AddItemButtons>
                        </div>
                        <div className='cancelTask addTaskButtonBox'>
                            <AddItemButtons >
                            Cancel
                            </AddItemButtons >
                        </div>
                        <div className='addTask addTaskButtonBox'>
                            <AddItemButtons inverse type='submit'>
                            Add Task
                            </AddItemButtons>
                        </div>
                    </div>
                    
                
                </form>
            </div>

    )
   
}


export default AddItemModal;
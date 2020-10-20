import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';

import AddItemButtons from './modalButtons/AddItemButtons';
import { AuthContext } from '../../context/AuthContext';


import './EditItemModal.css';



const EditItemModal = props =>{
    const auth = useContext(AuthContext);
    const token = auth.token
    const userId = props.userId;
    const itemId = props.itemId;
    const prevTaskName = props.taskName;
    const prevTag = props.tag;
    

    const [error, setError] = useState(null);
    
    const [inputData, setInputData] = useState({
        taskName: '', 
        taskDate: undefined,
        taskTag: ''
      });
   
      const inputChangeHandler =(event)=>{
        const value = event.target.value
        setInputData({ 
          ...inputData,
          [event.target.name]: value
    
        })
    };

    const submitHandler = async (event) =>{
        event.preventDefault();
        console.log(inputData);

    try{
        const response = await fetch( `http://localhost:5000/api/items/${userId}/${itemId}`, {
        method: 'PATCH', 
        headers: {
          'Content-Type': 'application/json'
        }, 
        Authorization: "Bearer " + auth.token,
        body: JSON.stringify({
          title: inputData.taskName, 
          date: inputData.taskDate,
          tags: [{name: inputData.taskTag}]

        })
      })

      const responseData= await response.json();
      console.log(responseData)

    props.onClose()
   
    }catch(err){
      console.log(err)

    }  }

    const content = (

        <div className="editItemModal__container">
            <h2>Edit your task</h2>
             <form className='editItemForm' method='post' onSubmit={submitHandler}>
                <div className='editItemForm__taskNameContainer'>
                    <input type ="text" name='taskName' placeholder={prevTaskName} 
                    value = {inputData.taskName} onChange={inputChangeHandler}/>
                </div>
            <div className='editItemForm__taskButtonsContainer'>
                <div className='taskDate'>
                    <input type ="date" name='taskDate' 
                     value = {inputData.taskDate} onChange={inputChangeHandler}/>
                </div>
                <div className='taskTag'>
                    <input type ="text" name='taskTag' placeholder={prevTag?prevTag:'Add a tag'} 
                     value = {inputData.taskTag} onChange={inputChangeHandler}/>
                </div>
                
                <div className='cancelTask editTaskButtonBox'>
                    <AddItemButtons onClick = {props.onClose}  >
                    Cancel
                    </AddItemButtons >
                </div>
                <div className='addTask addTaskButtonBox'>
                    <AddItemButtons inverse type='submit'>
                    Update Item
                    </AddItemButtons>
                </div>
                </div>
      
        </form>
    </div>
        
    )


    
    


    return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
     

   
}


export default EditItemModal;
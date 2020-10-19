import React, { useState, useContext } from 'react';

import './AddTagModal.css';
import AddItemButtons from './modalButtons/AddItemButtons';


const AddTagModal = props =>{


    const [inputData, setInputData] = useState({
        tagName: '', 

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
        console.log(inputData);
        // props.close()
        props.submit(inputData.tagName)

    
      }

    return (
     
            <div className="addTagModal__container">
                <form className='addTagForm' onSubmit={submitHandler}>
                    <div className='addTagForm__tagNameContainer'>
                        <input type ="text" name='tagkName' placeholder='Add a tag' 
                         value = {inputData.tagName} onChange={inputChangeHandler}/>
                    </div>
                    <div className='addTag addTaskButtonBox' >
                            <AddItemButtons inverse type='submit'>
                             Add Tag
                            </AddItemButtons>
                    </div>
                    </form>
            </div>


    )
   
}


export default AddTagModal;
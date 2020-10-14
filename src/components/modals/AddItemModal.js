import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import AddItemButtons from './modalButtons/AddItemButtons';


import './AddItemModal.css';


const AddItemModal = props =>{
    return (

            <div className="addItemModal__container">
                <form className='addItemForm' method='post'>
                    <div className='addItemForm__taskNameContainer'>
                        <input type ="text" id='taskName' placeholder='Add a task' />
                    </div>
                    <div className='addItemForm__taskButtonsContainer'>
                        <div className='taskDate'>
                            <input type ="date" id='taskDate' />
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
                            <AddItemButtons inverse >
                            Add Task
                            </AddItemButtons>
                        </div>
                    </div>
                    
                
                </form>
            </div>

    )
   
}


export default AddItemModal;
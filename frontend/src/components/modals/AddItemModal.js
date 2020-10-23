import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import AddItemButtons from './modalButtons/AddItemButtons';
import { AuthContext } from '../../context/AuthContext';
import AddTagModal from './AddTagModal';


import './AddItemModal.css';



const AddItemModal = props =>{
    const history = useHistory();
    const auth = useContext(AuthContext);
    const userId = auth.userId;
    const token = auth.token


    const [error, setError] = useState(null);
    const [addTagModalOpen, setAddTagModalOpen] = useState(false);
    const [tags, setTags] = useState([]);
    const [onsubmit, setOnsubmit] = useState(false);

    const openAddTagModal = () =>{
      setAddTagModalOpen(true)
    };

    const closeAddTagModal = () =>{
      setAddTagModalOpen(false)
    }

    
    const [inputData, setInputData] = useState({
        taskName: '', 
        taskDate: undefined,
        taskTag: ''
      });

      const addTagHandler = (props) =>{
        const addedTags = tags.push(props)
        setTags(addedTags);
      }
    
    
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
        console.log(userId);
        console.log(token);
        setOnsubmit(!onsubmit);
        history.push('/')
        

    try{
        const response = await fetch( `${process.env.REACT_APP_ASSET_URL}/api/items/${userId}`, {
        method: 'POST', 
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

    props.switch()
   
    }catch(err){
      console.log(err)

    }


    
      }

    return (
      <React.Fragment>
        {/* {addTagModalOpen && <AddTagModal submit = {addTagHandler} close={closeAddTagModal}  />} */}

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
                        <div className='taskTag'>
                            <input type ="text" name='taskTag' placeholder='Add a tag' 
                             value = {inputData.taskTag} onChange={inputChangeHandler}/>
                        </div>
                        {/* <div className='addTag addTaskButtonBox' >
                            <AddItemButtons onClick= {openAddTagModal} >
                                Add a Tag
                            </AddItemButtons>
                        </div> */}
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
            </React.Fragment>

    )
   
}


export default AddItemModal;
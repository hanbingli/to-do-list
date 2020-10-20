import React, { useState, useContext } from 'react';
import './ListItem.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faCircle as faCircleS, faEdit as faEditS, faTrashAlt as faTrashAltS} from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../../../context/AuthContext';
import { useHttpClient } from "../../../hooks/http-hook";
import EditItemModal from '../../modals/EditItemModal';
import Backdrop from '../../modals/Backdrop'


const ListItem = (props) =>{
    const tag = props.tags[0]
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [editItemModalOpen, setEditItemModalOpen] = useState(false);

    const userId = props.userId
    const itemId = props.id
    const isCompleted = props.completed;

    console.log(userId);
    console.log(itemId)

    const[completed, setCompleted] = useState(isCompleted);

    const completeHandler = async () =>{
       
        try {
          await sendRequest(
            `http://localhost:5000/api/items/${itemId}`,
            'PATCH',
            null,
            {
              Authorization: 'Bearer ' + auth.token,
            }
          );
          setCompleted(true);
          
        } catch (err) {}






        // try{
        //     const response = await fetch( `http://localhost:5000/api/items/complete/${itemId}`, {
        //     method: 'PATCH',
        //     Authorization: "Bearer " + auth.token,
        //   })
    
        //   const responseData= await response.json();
        //   console.log(responseData);
        //   alert(`Item set to ${responseData.completed}`)
        //   setCompleted(true)
       
        // }catch(err){
        //   console.log(err)
    
        // }
    } 

        const cancelCompleteHandler = async() =>{

            try {
                await sendRequest(
                  `http://localhost:5000/api/items/${itemId}`,
                  'PATCH',
                  null,
                  {
                    Authorization: 'Bearer ' + auth.token,
                  }
                )
                setCompleted(false);
              } catch (err) {}





            // try{
            //     const response = await fetch( `http://localhost:5000/api/items/complete/${itemId}`, {
            //     method: 'PATCH',
            //     Authorization: "Bearer " + auth.token,
            //   })
        
            //   const responseData= await response.json();
            //   console.log(responseData);
            //   alert(`Item set to ${responseData.completed}`)
            //   setCompleted(false)
           
            // }catch(err){
            //   console.log(err)
        
            // }
            
            
        }

      const openEditModal = () =>{
      
        setEditItemModalOpen(true);
    } 

    const closeEditModal = () =>{
      
        setEditItemModalOpen(false);
    } 






    const deleteHandler = async() =>{

        try {
            await sendRequest(
              `http://localhost:5000/api/items/${userId}/${itemId}`,
              'DELETE',
              null,
              {
                Authorization: 'Bearer ' + auth.token,
              }
            );
            props.onDelete(itemId)
          } catch (err) {}
  
    } 


    return(
        <li className='listItem'>
            <div className='listItem__content'>
            <div className="listItem__checkbox listItemContents">
                {!completed && (
                        <FontAwesomeIcon
                            icon={faCircle}
                            size="2x"
                            className="not-completed listItemContents"
                            onClick={completeHandler}
                        />
                   
                )
                }
                {completed &&(
                     <FontAwesomeIcon
                     icon={faCircleS}
                     size="2x"
                     className="completed listItemContents"
                     onClick={cancelCompleteHandler}
                   />
                   
                )}
                {editItemModalOpen && (
                    <EditItemModal 
                    onClose = {closeEditModal} 
                    userId={userId} 
                    itemId = {itemId}
                    taskName = {props.title}
                    tag = {tag.name}
                    
                    />
                )}
                 {editItemModalOpen && (
                   <Backdrop onClick={closeEditModal} />
                )}
                 </div>
                 <div className='listItem__content__info1'>
                    
                    <div className='listItem__title'>
                        {props.title}
                    </div>
                    {tag && ( <div className='listItem__tags'>
                        {tag.name}

                    </div>) }
                   

                </div>
                <div className='listItem__content__info2'>
                    <div className='listItem__date'>
                        {props.date}
                    </div>
                 </div>
                 <div className ='listItem__editButton listItemContents'>
                    <FontAwesomeIcon
                        icon={faEditS}
                        size="2x"
                        className="editIcon listItemContents"
                        onClick={openEditModal}
                    />
                 </div>
                 <div className ='listItem__deleteButton listItemContents'>
                    <FontAwesomeIcon
                        icon={faTrashAltS}
                        size="2x"
                        className="deleteIcon listItemContents"
                        onClick={deleteHandler}
                    />
                 </div>


            </div>
        </li>

    )
}
export default ListItem;
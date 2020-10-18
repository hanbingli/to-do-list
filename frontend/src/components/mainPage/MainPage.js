import React, { useState, useContext, useEffect }  from 'react';
import TagBar from './TagBar/TagBar';
import List from './List/List';
import { AuthContext } from '../../context/AuthContext';


import './MainPage.css';

const MainPage = () => {

  const auth = useContext(AuthContext);
  const userId = auth.userId;
  console.log(userId)

 
  const [loadedItems, setLoadedItems] = useState();

  useEffect(() => {

    const fetchItems = async () => {

        try{
            const response = await fetch(`http://localhost:5000/api/items/${userId}`, 
            {
              method: 'GET', 
              headers: {
                'Content-Type': 'application/json'
              }, 
              Authorization: "Bearer " + auth.token
            })
            const responseData = await response.json();
            console.log(responseData)
            setLoadedItems(responseData.items)
        }catch(err){
          console.log(err)
          // setError(err.message || 'Something went wrong, please try again')
          }
        }
      fetchItems();

  },  [loadedItems,userId])



    return (
      <div className='mainContainer'>
          <div className='TagBarContainer'>
             <TagBar className = 'TagBar'/>
          </div>
          {
            loadedItems && (
              <div className='ListContainer'>
              <List className = 'List' items = {loadedItems} />
           </div>

            )
          }
         
      </div>
     
    );
  }
  
  export default MainPage;
  
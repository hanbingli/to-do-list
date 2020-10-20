import React, { useState, useContext, useEffect }  from 'react';
import TagBar from './TagBar/TagBar';
import List from './List/List';
import { AuthContext } from '../../context/AuthContext';
import { useHttpClient } from "../../hooks/http-hook";


import './MainPage.css';

const MainPage = () => {

  const auth = useContext(AuthContext);
  const userId = auth.userId;
  console.log(userId)

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

 
  const [loadedItems, setLoadedItems] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();

  useEffect(() => {

    const fetchItems = async () => {

        try {
                const responseData = await sendRequest(
                  `http://localhost:5000/api/items/${userId}`
                );

                setLoadedItems(responseData.items)
              } catch (err) {}
      };

    fetchItems();
  }, [sendRequest]);


  const itemDeleteHandler = (deletedItemId) =>{
    setLoadedItems((prevItems)=>{
      prevItems.filter(i => i._id !== deletedItemId)
    })
  }


     
      // setIsLoading(true);

      //   try{
      //       const response = await fetch(`http://localhost:5000/api/items/${userId}`, 
      //       {
      //         method: 'GET', 
      //         headers: {
      //           'Content-Type': 'application/json'
      //         }, 
      //         Authorization: "Bearer " + auth.token
      //       })
      //       const responseData = await response.json();
      //       console.log(responseData)
      //       setLoadedItems(responseData.items)

      //       if (!response.ok) {
      //         throw new Error(responseData.message);
      //       }
      //       setIsLoading(false)



      //   }catch(err){
          
      //     setIsLoading(false);
      //     setError(err.message || 'Something went wrong, please try again');
      //     console.log(err)
          
      //     }
      //   }
   
      //  fetchItems();
     

  // },  [])



    return (
      <div className='mainContainerOuterBox'>
  

         <div className='mainContainer'>
              {/* <div className='TagBarContainer'>
                <TagBar className = 'TagBar' items = {loadedItems} />
              </div> */}
              <div className='ListContainer'>
                  <List className = 'List' items = {loadedItems} onDeleteItem = {itemDeleteHandler}/>
              </div>
              </div>
           </div>
         
     
    );
  }
  
  export default MainPage;
  
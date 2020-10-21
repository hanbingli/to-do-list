import React, { useState, useContext, useEffect }  from 'react';
import TagBar from './TagBar/TagBar';
import List from './List/List';
import { AuthContext } from '../../context/AuthContext';
import { useHttpClient } from "../../hooks/http-hook";
import { SearchContext } from '../../context/SearchContext';


import './MainPage.css';

const MainPage = () => {


  const auth = useContext(AuthContext);
  const { searchInput, searchInputHandler } = useContext(SearchContext);

  const userId = auth.userId;
  console.log(userId)

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

 
  const [loadedItems, setLoadedItems] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  const itemDeleteHandler = (deletedItemId) =>{
    setLoadedItems((prevItems)=>{
      prevItems.filter(i => i._id !== deletedItemId)
    })
  }
 

  useEffect(() => {

    const fetchItems = async () => {

        try {
                const responseData = await sendRequest(
                  `http://localhost:5000/api/items/${userId}`
                );

                setLoadedItems(responseData.items)
                console.log(loadedItems)
              } catch (err) {}
      };

    fetchItems();
  }, [sendRequest, auth]);



useEffect(() => {

  const searchItems = async () => {

    try {
            const responseData = await sendRequest(
              `http://localhost:5000/api/items/${userId}/search`, 
              'GET',
              {
                 body: JSON.stringify({
                  keyword: searchInput })
              },
              {
                Authorization: 'Bearer ' + auth.token,
              }
            );
            setSearchResult(responseData.items)
            console.log(searchResult)
          } catch (err) {}

  };

  if(!!searchInput){
   searchItems()

  }
  

}, [sendRequest, searchInput]);





  // useEffect(() => {
  //   const searchItem = (keyword) =>{
  //     setLoadedItems((prevItems)=>{
  //       prevItems.filter(i=> i.title.toLowerCase().includes(keyword.toLowerCase())  )
  //     })}

  //     if(!!searchInput && loadedItems){
  //       searchItem(searchInput);
  //       console.log(loadedItems)
      
  //     };
    
  //   }, searchInput)

  

  


     
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
              {loadedItems && (
              <div className='ListContainer'>
                  <List className = 'List' items = {loadedItems} onDeleteItem = {itemDeleteHandler}/>
              </div>
              )}
              {/* {searchInput  (
              <div className='ListContainer'>
                  <List className = 'List' items = {loadedItems} onDeleteItem = {itemDeleteHandler}/>
              </div>
              )} */}
              </div>
           </div>
         
     
    );
  }
  
  export default MainPage;
  
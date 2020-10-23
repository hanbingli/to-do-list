import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';
import { useHttpClient } from "../../hooks/http-hook";
import { SearchContext } from '../../context/SearchContext';
import List from './List/List';
import './MainPage.css'

const SearchResult = (props) => {
  const history = useHistory();

  const auth = useContext(AuthContext);
  const userId = auth.userId;
  const { searchInput, searchInputHandler } = useContext(SearchContext);
  console.log(searchInput)

  const { isLoading, error, sendRequest, clearError } = useHttpClient();
 
  const [searchResult, setSearchResult] = useState([]);
 

  const itemDeleteHandler = (deletedItemId) => {
    setSearchResult((prevItems) => {
      prevItems.filter(i => i._id !== deletedItemId)
    });
    history.push('/');


  }

  useEffect(() => {
    const searchItems = async () => {

      try {

        const responseData = await sendRequest(
          `${process.env.REACT_APP_ASSET_URL}/api/items/${userId}/search?q=${searchInput}`);
        setSearchResult(responseData.items);
        console.log(responseData)
        console.log(searchResult)
      } catch (err) { }
    };

    searchItems()

  }, [sendRequest, searchInput]);

  return (
    <div className='mainContainerOuterBox'>
      <div className='searchListContainer'>
        {/* <button onClick={searchItems}>button</button> */}
        {searchResult && (
          <List className='List' items={searchResult} onDeleteItem={itemDeleteHandler} onChange={props.onChange}/>
        )}
      </div>
    </div>

  )



}






export default SearchResult;
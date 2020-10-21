import React, {useContext, useEffect, useState, useCallback} from 'react';

import './SearchBar.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch as faSearch } from '@fortawesome/free-solid-svg-icons';
import { SearchContext } from '../../context/SearchContext'


const SearchBar = () =>{

    const [inputData, setInputData] = useState('')

    const { searchInput, searchInputHandler } = useContext(SearchContext);


   
    const inputChangeHandler =(event)=>{
        setInputData(event.target.value)
     }


    const searchHandler = async (event) =>{
        event.preventDefault();
        console.log(inputData);
        searchInputHandler(inputData);
        console.log(searchInput)

    }



    return(
        <div className='searchBar'>
            <form className = 'searchForm'
            >
                <input
                    className="search-input"
                    value={inputData}
                    type="text"
                    placeholder="Search to-do list item"
                    onChange={inputChangeHandler}
                ></input>
                <button
                    className="searchButton"
                    type="submit"
                    onClick={searchHandler}
                 
                >
                    <FontAwesomeIcon 
                    className='searchButton__icon'
                    icon={faSearch} 
                    size='2x'
                    />
                </button>
            </form>
           
        </div>


    )
}

export default SearchBar;
import React from 'react';
import TagBar from './TagBar/TagBar';
import List from './List/List';

import './MainPage.css';

const MainPage = () => {

    const dummyList =[
        {id:'01', 
        tag:'important', 
        content:'technical assignment', 
        date:'2020-10-13',
        completed:false,
        
        },
        {id:'02', 
        tag:'remote', 
        content:'assignment2', 
        date:'2020-10-13',
        completed:true,
        
        },
    
    ];



    return (
      <div className='mainContainer'>
          <div className='TagBarContainer'>
             <TagBar className = 'TagBar' items={dummyList}/>
          </div>
          <div className='ListContainer'>
             <List className = 'List' items={dummyList} />
          </div>
      </div>
     
    );
  }
  
  export default MainPage;
  
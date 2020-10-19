import React, { useState, useContext, useEffect } from 'react';

import ListItem from './ListItem';
import './List.css';

const List = props =>{
    


    if(props.items.length === 0){
        return(
            <div className='no-item'>
                <h2>No to-do item found.</h2>
            </div>
        );
    }

    return(
        <ul className="itemList">
            <h1>Your to-do list:</h1>
            {
                props.items.map(item =>(
                    <ListItem 
                        key={item._id}
                        tags={item.tags}
                        title={item.title}
                        date={item.date}
                        completed={item.completed}
                        id={item._id}
                    
                    />
                ))
            }
        </ul>
    )
}

export default List;
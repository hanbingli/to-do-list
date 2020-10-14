import React, { useState, useContext } from 'react';
import './TagItem.css';

const TagItem = props =>{


    return(
        <li className='TagItem'>
           {props.tag}
        </li>

    )
}
export default TagItem;
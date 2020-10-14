import React, { useState } from 'react';

import './AddItem.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus as faPlus } from '@fortawesome/free-solid-svg-icons';

const AddItem = props =>{
   
    


    return(
        <div classname='AddItemContainer'>
            <FontAwesomeIcon
                     icon={faPlus}
                     size="2x"
                     className="AddItemButton"
                     onClick={props.onClick}
                   />

        </div>


    )
}

export default AddItem;
import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus as faPlus } from '@fortawesome/free-solid-svg-icons';

const AddItem = props =>{
   


    return(
        <div className='addItemContainer'>
            <FontAwesomeIcon
                     icon={faPlus}
                     size="2x"
                     className="addItemButton"
                     onClick={props.onClick}
                   />

        </div>


    )
}

export default AddItem;
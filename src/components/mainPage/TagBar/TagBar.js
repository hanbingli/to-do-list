import React from 'react';
import TagItem from './TagItem';


const TagBar = props =>{

        return(
            <div className= 'tagBar'>
                <h2>Tags</h2>
                <ul className="tagList">
                    {/* {
                        props.items.map(item =>(
                            <TagItem 
                                key={item.id}
                            />
                        ))
                    } */}
                </ul>
                </div>
        )
    }

  export default TagBar;
  
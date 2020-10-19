import React, { useState } from 'react';
import TagItem from './TagItem';


const TagBar = props =>{

    const [tags, setTags] =useState([]);
    const items = props.items;
    const itemTags = items.map(i => i.tags )
    setTags(itemTags);


        return(
            <div className= 'tagBar'>
                {/* <h2>Tags</h2>
                <ul className="tagList">
                    {
                        tags.map(tag =>(
                            <TagItem 
                               name = {tag.name}
                            />
                        ))
                    }
                </ul> */}
                </div>
        )
    }

  export default TagBar;
  
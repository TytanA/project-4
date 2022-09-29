
import React from 'react'
import { Button } from 'semantic-ui-react'

export default function Deletebutton({ handleDeletePost, id }){

    function handleClick(e){
        e.preventDefault();
        handleDeletePost(id);
    } 

    return(
    
        <Button onClick={handleClick} className="btn">
            Delete
        </Button>
    
    )
}
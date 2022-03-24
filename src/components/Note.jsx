import React from 'react';

function Note (props) {

    function handleDeleteClick () {
        props.onDelete(props.id);
    }

    return (
        <div className='note'>
            <h1>{props.title}</h1>
            <p>{props.note}</p>
            <button onClick={handleDeleteClick}>X</button>
        </div>
    )
}

export default Note;
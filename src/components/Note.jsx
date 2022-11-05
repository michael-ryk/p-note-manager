import React from 'react';

function Note ({id, title, note, onDelete}) {
    function handleDeleteClick () {
        onDelete(id);
    }

    return (
        <div className='note'>
            <h1>{title}</h1>
            <p>{note}</p>
            <button onClick={handleDeleteClick}>X</button>
        </div>
    )
}

export default Note;
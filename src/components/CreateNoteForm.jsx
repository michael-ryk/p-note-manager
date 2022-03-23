import React, { useState } from 'react';

function CreateNoteForm(addNote) {
  //New created note
  const [note, setNote] = useState({ title: '', note: '' });

  function onChange(e) {
    const { name, value } = e.target;
    
    //append typed chars to title/note
    setNote((prev) => {
      return {...prev , [name]: value};
    });
  }

  function submitNote(submitEvent) {
    submitEvent.preventDefault(); // to prevent refresh of page
  }

  return (
    <div>
      <form onSubmit={submitNote}>
        <input
          name='title'
          onChange={onChange}
          value={note.title}
          placeholder='Title'
        />
        <input
          name='note'
          onChange={onChange}
          value={note.note}
          placeholder='Write note here'
          rows='4'
        />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}

export default CreateNoteForm;

import React, { useState } from 'react';

function CreateNoteForm(props) {
  //New created note
  const [note, setNote] = useState({ id: '', title: '', note: '' });

  function onChange(e) {
    const { name, value } = e.target;

    //append typed chars to title/note
    setNote((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function submitNote(submitEvent) {
    note.id = new Date().getTime().toString();  // Set unique id
    props.addNote(note);                        // use addnote passed from props
    setNote({ id: '', title: '', note: '' });   // clean current note object
    submitEvent.preventDefault();               // to prevent refresh of page
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

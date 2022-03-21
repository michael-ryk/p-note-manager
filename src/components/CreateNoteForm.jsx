import React from 'react';

function CreateNoteForm() {
  return (
    <div>
      <form>
        <input name='title' placeholder='Title'/>
				<input name='note' placeholder='Write note here'/>
				<button type='submit'>Add</button>
      </form>
    </div>
  );
}

export default CreateNoteForm;

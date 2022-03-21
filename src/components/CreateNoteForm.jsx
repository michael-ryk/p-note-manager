import React from 'react';

function CreateNoteForm() {


	function submitNote (submitEvent) {

		submitEvent.preventDefault();				// to prevent refresh of page
	}

  return (
    <div>
      <form onSubmit={submitNote}>
        <input name='title' placeholder='Title'/>
				<input name='note' placeholder='Write note here'/>
				<button type='submit'>Add</button>
      </form>
    </div>
  );
}

export default CreateNoteForm;

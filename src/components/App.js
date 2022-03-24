import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNoteForm from './CreateNoteForm';
import Note from './Note';
import dummyNotes from '../dummyData';
import './App.css';


function App() {

  var [notes, setNotes] = useState(dummyNotes);

  function addNote (singleNote) {
    console.log(singleNote);
    setNotes((prevNotes) => {
      console.log(prevNotes);
      return [...prevNotes, singleNote]
    });
  }

  function deleteNote () {
    
  }

  return (
    <div className="App">
      <Header />
      <CreateNoteForm addNote={addNote}/>
      <div className="container">
        {notes.map((item) => {
          return <Note key={item.id} {...item}/>
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;

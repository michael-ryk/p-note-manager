import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNoteForm from './CreateNoteForm';
import Note from './Note';
import dummyNotes from '../dummyData';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <CreateNoteForm />
      {dummyNotes.map((item) => {
        return <Note key={item.id}/>
      })}
      <Footer />
    </div>
  );
}

export default App;

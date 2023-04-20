import { useEffect, useState } from 'react';
import './App.css';
import Main from './conpontnts/Main';
import Sidebar from './conpontnts/Sidebar';
import uuid from 'react-uuid';

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem('notes')) || []
  );
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    //ローカルストレージにノートを保存する
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    setActiveNote(notes[0].id);
  }, []);

  const onAddNote = () => {
    console.log('新しくノートが追加させました。');
    const newNote = {
      id: uuid(),
      title: '',
      content: '',
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
  };

  const onDeleteNote = (id) => {
    const filterNotes = notes.filter((note) => note.id !== id);
    setNotes(filterNotes);
  };

  const getActivNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  const onUpdateNote = (onUpdateNote) => {
    //修正された新しいノートの配列を返す。
    const updatedNotesArray = notes.map((note) => {
      if (note.id === onUpdateNote.id) {
        return onUpdateNote;
      } else {
        return note;
      }
    });
    setNotes(updatedNotesArray);
  };

  return (
    <div className="App">
      <Sidebar
        onAddNote={onAddNote}
        notes={notes}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main activeNote={getActivNote()} onUpdateNote={onUpdateNote} />
    </div>
  );
}

export default App;

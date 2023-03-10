import Note from './Note';
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import AddNote from './AddNote';
import './Note.css';

const NotesList = ({
	handleAddNote,
	handleDeleteNote,
}) => {
	
	const [notes, setNotes] = useState([
		  {
			  id: nanoid(),
			  text: 'not relly feellllingg goood:(!',
			  date: '15/04/2021',
		  },
		  {
			  id: nanoid(),
			  text: 'hi, i bought 4 buns & 5 new candies',
			  date: '21/02/2023',
		  },
		  {
			  id: nanoid(),
			  text: 'todays grocery list: 4 kurkure, 5 amul kool',
			  date: '28/02/2023',
		  },
	  ]);
  
  
	  useEffect(() => {
		  const savedNotes = JSON.parse(
			  localStorage.getItem('notes-app-data')
		  );
  
		  if (savedNotes) {
			  setNotes(savedNotes);
		  }
	  }, []);
  
	  useEffect(() => {
		  localStorage.setItem(
			  'notes-app-data',
			  JSON.stringify(notes)
		  );
	  }, [notes]);
  
	  const addNote = (text) => {
		  const date = new Date();
		  const newNote = {
			  id: nanoid(),
			  text: text,
			  date: date.toLocaleDateString(),
		  };
		  const newNotes = [...notes, newNote];
		  setNotes(newNotes);
	  };
  
	  const deleteNote = (id) => {
		  const newNotes = notes.filter((note) => note.id !== id);
		  setNotes(newNotes);
	  };
  
	return (
		<div className='notes-list'>
			{notes.map((note) => (
				<Note
					id={note.id}
					text={note.text}
					date={note.date}
					handleDeleteNote={handleDeleteNote}
				/>
			))}
					  <NotesList
handleAddNote={addNote}
handleDeleteNote={deleteNote}
/>
			<AddNote handleAddNote={handleAddNote} />
		</div>
	);
};

export default NotesList;

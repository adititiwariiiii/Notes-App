import Note from './Note';
import './Note.css';
 
const NotesList = ({
	notes,
	handleAddNote,
	handleDeleteNote}) => {
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
			<Note handleAddNote={handleAddNote} />

		</div>
	);
};

export default NotesList;

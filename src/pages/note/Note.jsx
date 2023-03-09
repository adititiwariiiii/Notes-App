import { MdDeleteForever } from 'react-icons/md';
import { useState } from 'react';
import { Link } from "react-router-dom";
import './Note.css';

const Note = ({ id, text, date, handleDeleteNote , handleAddNote}) => {

	const [noteText, setNoteText] = useState('');
	const characterLimit = 1000;

	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};

	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			handleAddNote(noteText);
			setNoteText('');
		}
	};

	return (
		<div className='note'>
			<span>{text}</span>
			<div className='note-footer'>
				<small>{date}</small>
				<MdDeleteForever
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.3em'
				/>

<div className='note new'>
			<textarea
				rows='8'
				cols='10'
				placeholder='Type ..........'
				value={noteText}
				onChange={handleChange}
			></textarea>
			<div className='note-footer'>
				<small>
					{characterLimit - noteText.length} Remaining
				</small>
				<button className='save' onClick={handleSaveClick}>
					Save
				</button>
			</div>
		</div>



			</div>
		</div>

		
	);
};

export default Note;


import { useState } from "react";

const AddNote = ({ handleAddNote}) => {
	const [noteText, setNoteText] = useState("");
	const characterLimit = 200;
	const hendeleChange = (event) => {
		//console.log(event.target.value);
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
		
	};

	const hedeleSaveClick = () => {
		if (noteText.trim().length > 0) {
			handleAddNote(noteText);
			setNoteText('');
		}
		
	}
	return (
		<div className="note new">
			<textarea rows="8" cols="10" placeholder="Type to add note ..." value={noteText} onChange={hendeleChange}
			></textarea>
			<div className="note-footer">
				<small>{characterLimit - noteText.length} Remaining</small>
				<button className="seva" onClick={hedeleSaveClick}>Seva</button>
			</div>
		</div>
	)
}

export default AddNote;
import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";

const App = () => {
	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: "First is my note!",
			date: "24/01/2022"
		},
		{
			id: nanoid(),
			text: "Second is my note!",
			date: "22/01/2022"
		},
		{
			id: nanoid(),
			text: "Third is my note!",
			date: "26/01/2022"
		},
	]);

	const [searchText, setSearchText] = useState("");

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		}
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deletNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id );
		setNotes(newNotes);
	}

	return (
		<div className="container">
			<Search handleSearchNote={setSearchText}></Search>
			<NotesList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
				handleAddNote={addNote}
				handleDeleteNote={deletNote} />
		</div>
	)
}

export default App;

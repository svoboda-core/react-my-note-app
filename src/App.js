import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

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

	const [darkMode, setDarkMode] = useState(false);

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
		<div className={`${darkMode && 'dark-mode'}`}>
			<div className="container">
				<Header handleToggleDarkMode={setDarkMode}></Header>
				<Search handleSearchNote={setSearchText}></Search>
				<NotesList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
					handleAddNote={addNote}
					handleDeleteNote={deletNote} />
			</div>
		</div>
		
	)
}

export default App;

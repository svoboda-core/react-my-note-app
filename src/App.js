import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";

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
	return (
		<div className="container">
			<NotesList notes={notes}/>
		</div>
	)
}

export default App;

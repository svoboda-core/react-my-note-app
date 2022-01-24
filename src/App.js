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
/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
 */
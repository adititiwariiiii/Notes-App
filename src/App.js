import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import { nanoid } from 'nanoid';
import NotesList from './pages/note/NotesList';
import { useState, useEffect } from 'react';
import Note from './pages/note/Note';


function App() {
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

	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
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

    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar />
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/users">
            <UserList />
          </Route>

		  <Route path="/notes">
            <Note />
          </Route>

          <Route path="/user/:userId">
            <User />
          </Route>

          <Route path="/newUser">
            <NewUser />
          </Route>
		  
        </Switch>
        
      </div>
    </Router>

	



  );
}

export default App;

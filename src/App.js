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
import AddNote from './pages/note/AddNote';


const App = () =>{

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

          <Route path="/user/:userId">
            <User />
          </Route>

          <Route path="/newUser">
            <NewUser />
          </Route>

		  <Route path="/note">
			<NotesList/>
			<AddNote />
          </Route>
				  
        </Switch>

      </div>
    </Router>


  );
}

export default App;

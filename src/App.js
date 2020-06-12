import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import About from './components/About';
import NewStudentDetails from './components/NewStudentDetails';
import Login from './components/Authentication/Login';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About }/>
          <Route path='/students' component={NewStudentDetails}/>
          <Route path = '/login' component = {Login}/>
        </div>
    </BrowserRouter>
  );
}

export default App;

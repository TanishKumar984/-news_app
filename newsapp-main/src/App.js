import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
   Routes,
  Route,
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <NavBar/>
        <Routes>
          <Route path="" element={< News  key='general' pageSize={6} country="in" category="general"/>}></Route>
          <Route path="/Business" element={ <News key='business'  pageSize={6} country="in" category="business"/>}></Route>
          <Route path="/Entertainment" element={<News key='entertainment'  pageSize={6} country="in" category="entertainment"/>}></Route>
          <Route path="/Health" element={ <News key='health'  pageSize={6} country="in" category="health"/>}></Route>
          <Route path="/Science" element={ <News key='science'  pageSize={6} country="in" category="science"/>}></Route>
          <Route path="/Sports" element={ <News key='sports'  pageSize={6} country="in" category="sports"/>}></Route>
          <Route path="/Technology" element={ <News  key='technology}>' pageSize={6} country="in" category="technology"/>}></Route>

        </Routes>
        </Router>
      </div>
    )
  }
}

import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link 
} from "react-router-dom";
export default class App extends Component {
    render() {
    return (
      <div>
        <Router>
        <Navbar/>
        {/* <News pagesize={20} api={"c2c8bf7be2b244f2860c8a8176699608"} category={"technology"}/> */}

        <Routes>
              <Route exact path="/" element={<News key={Math.random()} pagesize={20} api={"c2c8bf7be2b244f2860c8a8176699608"} category={"general"}/>}/>
              <Route exact path="/business" element={<News key={Math.random()} pagesize={20} api={"c2c8bf7be2b244f2860c8a8176699608"} category={"business"}/>}/>
              <Route exact path="/entertainment" element={<News key={Math.random()} pagesize={20} api={"c2c8bf7be2b244f2860c8a8176699608"} category={"entertainment"}/>}/> 
              
              <Route exact path="/health" element={<News key={Math.random()} pagesize={20} api={"c2c8bf7be2b244f2860c8a8176699608"} category={"health"}/>}/> 
              <Route exact path="/science" element={<News key={Math.random()} pagesize={20} api={"c2c8bf7be2b244f2860c8a8176699608"} category={"science"}/>}/> 
              <Route exact path="/sports" element={<News key={Math.random()} pagesize={20} api={"c2c8bf7be2b244f2860c8a8176699608"} category={"sports"}/>}/> 
              <Route exact path="/technology" element={<News key={Math.random()} pagesize={20} api={"c2c8bf7be2b244f2860c8a8176699608"} category={"technology"}/>}/>

        </Routes>

        </Router> 
      </div>
    )
  }
}

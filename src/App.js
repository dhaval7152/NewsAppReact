import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link 
} from "react-router-dom";
export default class App extends Component {
  
  pagesize=15;

  state={
    progress:0
  }

  setProgress=(progress)=>{   
    this.setState({progress:progress})
  }
    render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
       
      />
        <Routes>
              <Route exact path="/" element={<News setProgress={this.setProgress} key={Math.random()} pagesize={this.pagesize} api={"c2c8bf7be2b244f2860c8a8176699608"} category={"general"}/>}/>
              <Route exact path="/business" element={<News setProgress={this.setProgress} key={Math.random()} pagesize={this.pagesize} api={"c2c8bf7be2b244f2860c8a8176699608"} category={"business"}/>}/>
              <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key={Math.random()} pagesize={this.pagesize} api={"c2c8bf7be2b244f2860c8a8176699608"} category={"entertainment"}/>}/> 
              
              <Route exact path="/health" element={<News setProgress={this.setProgress} key={Math.random()} pagesize={this.pagesize} api={"c2c8bf7be2b244f2860c8a8176699608"} category={"health"}/>}/> 
              <Route exact path="/science" element={<News setProgress={this.setProgress} key={Math.random()} pagesize={this.pagesize} api={"c2c8bf7be2b244f2860c8a8176699608"} category={"science"}/>}/> 
              <Route exact path="/sports" element={<News setProgress={this.setProgress} key={Math.random()} pagesize={this.pagesize} api={"c2c8bf7be2b244f2860c8a8176699608"} category={"sports"}/>}/> 
              <Route exact path="/technology" element={<News setProgress={this.setProgress} key={Math.random()} pagesize={this.pagesize} api={"c2c8bf7be2b244f2860c8a8176699608"} category={"technology"}/>}/>
        </Routes>

        </Router> 
      </div>
    )
  }
}

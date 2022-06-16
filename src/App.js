import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
export default class App extends Component {
  pagesize = 15;
  apiKey1 = "92e60c6beffe447d9eb653d9f99985fd";

  // state = {
  //   progress: 0,
  // };

  // setProgress = (progress) => {
  //   this.setState({ progress: this.state.progress });
  // };
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          {/* <LoadingBar
            height={3}
            color="#f11946"
            progress={this.state.progress}
          /> */}
          <Routes>
            <Route
              exact
              path="/"
              element={
               <News setProgress={this.setProgress} key={Math.random()} pagesize={this.pagesize} api={this.apiKey1} category={"business"}/>
              }
            />
            <Route
              exact
              path="/business"
              element={
               <News 
                  key={Math.random()}
                  pagesize={this.pagesize}
                  api={this.apiKey1}
                  category={"business"}
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
               <News 
                  key={Math.random()}
                  pagesize={this.pagesize}
                  api={this.apiKey1}
                  category={"entertainment"}
                />
              }
            />

            <Route
              exact
              path="/health"
              element={
               <News 
                  key={Math.random()}
                  pagesize={this.pagesize}
                  api={this.apiKey1}
                  category={"health"}
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
               <News 
                  key={Math.random()}
                  pagesize={this.pagesize}
                  api={this.apiKey1}
                  category={"science"}
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
               <News 
                  key={Math.random()}
                  pagesize={this.pagesize}
                  api={this.apiKey1}
                  category={"sports"}
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
               <News 
                  key={Math.random()}
                  pagesize={this.pagesize}
                  api={this.apiKey1}
                  category={"technology"}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

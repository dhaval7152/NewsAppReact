import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
const App=()=> {
  const pagesize = 15;
  const apiKey1 = process.env.REACT_APP_NEWS_KEY

  // state = {
  //   progress: 0,
  // };

  // setProgress = (progress) => {
  //   setState({ progress: state.progress });
  // };
    return (
      <div>
        <Router>
          <Navbar />
          {/* <LoadingBar
            height={3}
            color="#f11946"
            progress={state.progress}
          /> */}
          <Routes>
            <Route
              exact
              path="/"
              element={
               <News  key={Math.random()} pagesize={pagesize} api={apiKey1} category={"business"}/>
              }
            />
            <Route
              exact
              path="/business"
              element={
               <News 
                  key={Math.random()}
                  pagesize={pagesize}
                  api={apiKey1}
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
                  pagesize={pagesize}
                  api={apiKey1}
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
                  pagesize={pagesize}
                  api={apiKey1}
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
                  pagesize={pagesize}
                  api={apiKey1}
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
                  pagesize={pagesize}
                  api={apiKey1}
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
                  pagesize={pagesize}
                  api={apiKey1}
                  category={"technology"}
                />
            
              }
            />
            
          </Routes>
        </Router>
      </div>
    );
  }
  export default App;

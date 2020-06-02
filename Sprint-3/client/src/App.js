import React, { Component} from 'react';
import './App.css';
import "./styles/main.css";
import Header from "./components/Header";
import MainVideo from "./components/MainVideo";
import Upload from "./components/Upload";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";




class App extends Component {

  
  

  render(){
    return (

      <Router>
        <div className="main-doc">
          <Header />
            <Switch>
              {/* route 1 */}
              <Route path="/" exact component={MainVideo} />
              {/* route 2 */}
              <Route path="/Main/:id" exact component={MainVideo} />
              {/* route 3 */}
              <Route path="/upload/" exact component={Upload} />

            </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
  
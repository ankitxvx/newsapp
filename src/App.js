import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

export default class App extends Component {
pageSize=5;
state = {
  progress: 10
}
setProgress = (progress)=>{
  this.setState({progress:progress})
}
  render() {
    return (
      <div>
      <Router>
        <Navbar/> 
        <LoadingBar
        height={3}
        color='#07deac'
        loaderSpeed={300}
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
      <News setProgress = {this.setProgress} key ="general" pageSize = {5} country = "in" category = "general"/>
        <Route>
          <Route exact path="/"><News setProgress = {this.setProgress} key="general" pageSize={5} country="in" category="general"/></Route> 
          <Route exact path="/business"><News setProgress = {this.setProgress} key="business" pageSize={5} country="in" category="business"/></Route> 
          <Route exact path="/entertainment"><News setProgress = {this.setProgress} key="entertainment" pageSize={5} country="in" category="entertainment"/></Route> 
          <Route exact path="/general"><News setProgress = {this.setProgress} key="general" pageSize={5} country="in" category="general"/></Route> 
          <Route exact path="/health"><News setProgress = {this.setProgress} key="health" pageSize={5} country="in" category="health"/></Route> 
          <Route exact path="/science"><News setProgress = {this.setProgress} key="science" pageSize={5} country="in" category="science"/></Route> 
          <Route exact path="/sports"><News setProgress = {this.setProgress} key="sports" pageSize={5} country="in" category="sports"/></Route> 
          <Route exact path="/technology"><News setProgress = {this.setProgress} key="technology" pageSize={5} country="in" category="technology"/></Route> 
        </Route>
        </Router>
        
      </div>
    )
  }
}
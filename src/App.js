import React, { Component } from 'react'
import Navbar from './comp/Navbar';
import News from './comp/News';
import LoadingBar from 'react-top-loading-bar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize = 5;
  apiKey = "5ac7ca8c3c3e46b59fc5895609192904";

  state={
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({progress: progress})
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
          <Switch>
            <Route exact path="/"><News apiKey={this.apiKey}  setProgress={this.setProgress} key="general" pageSize={this.pageSize} country= "in" category="general"/></Route>
            <Route exact path="/business"><News apiKey={this.apiKey} setProgress={this.setProgress} key="business" pageSize={this.pageSize} country= "in" category="business"/></Route>
            <Route exact path="/entertainment"><News apiKey={this.apiKey} setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country= "in" category="entertainment"/></Route>
            <Route exact path="/health"><News apiKey={this.apiKey} setProgress={this.setProgress} key="health" pageSize={this.pageSize} country= "in" category="health"/></Route>
            <Route exact path="/science"><News apiKey={this.apiKey} setProgress={this.setProgress} key="science" pageSize={this.pageSize} country= "in" category="science"/></Route>
            <Route exact path="/sports"><News apiKey={this.apiKey} setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country= "in" category="sports"/></Route>
            <Route exact path="/technology"><News apiKey={this.apiKey} setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country= "in" category="technology"/></Route>
          </Switch>
        </Router>
        
      </div>
    )
  }
}


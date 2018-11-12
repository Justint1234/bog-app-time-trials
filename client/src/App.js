import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import CreaturePage from './components/CreaturePage'

const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins');
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background: blue;
  }
`


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Global />
          <Switch>
          <Route path='/' component={CreaturePage}/>
          </Switch>
          <h3>monsters</h3>
        </div>
      </Router>
    );
  }
}

export default App;

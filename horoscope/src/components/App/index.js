import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../../App.css';
import Header from '../Header';
import Home from '../Home';
import ErrorPage from '../ErrorPage';
import Editor from '../Editor';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/editor" component={Editor} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;

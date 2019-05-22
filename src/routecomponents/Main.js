import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styles from './styles.css';

// Components:
import Home from './Home';
import Projekte from './Projekte'; // projekte
import Leben from './Leben';   // leben



export default class Main extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <main className = { styles.mainStyles }>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/Projekte' component={Projekte}/>
          <Route path='/Leben' component={Leben}/>
        </Switch>
      </main>
    );
  }
}
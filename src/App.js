import React, {Component} from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import { Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { NotFound } from './pages/NotFound';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

class App extends Component {
  
  render(){

    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/detail/:id' component={Detail} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }

  
}
library.add(faStar)
export default App;

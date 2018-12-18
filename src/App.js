import './App.css';
import React, { Component } from 'react';
import createStore from './store/createStore';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import List from './sections/list';
import Add from './sections/add';
import 'symbol-observable';
import { from } from 'rxjs';
import { setObservableConfig } from 'recompose';

setObservableConfig({ fromESObservable: from });

const store = createStore();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <Switch>
              <Route path="/add" component={Add} />
              <Route path="/" component={List} />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;

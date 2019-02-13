import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import store from './store';

// COMPONENTS
import Header from './components/Header';
import Footer from './components/Footer';

// CONTAINER
import Home from './container/Home';
import News from './container/News';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path ="/" component={Home} />
              <Route path="/news/:id" component={News} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

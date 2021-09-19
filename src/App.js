import './styles/App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends React.Component { 

  render() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Main} /> 
        <Route path='/about' component={About} />
      </Switch>
      <Footer />
    </div>
  );
  }
}

export default App;

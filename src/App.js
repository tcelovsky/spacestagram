import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const BASE_URL = "https://images-api.nasa.gov/search?"
const QUERY_URL = `${BASE_URL}q=earth%20from%20space&media_type=image`

class App extends React.Component { 

  componentDidMount() {
    this.fetchImages()
  }

  fetchImages = () => {
    const configObj = {
      method: "GET",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      }
    }
    return fetch(QUERY_URL, configObj)
      .then(response => response.json())
      .then(data => console.log(data))
  }

  render() {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
  }
}

export default App;

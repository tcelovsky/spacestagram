import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const BASE_URL = "https://api.nasa.gov/planetary/apod?api_key="
const QUERY_URL = `${BASE_URL}${process.env.REACT_APP_NASA_API_KEY}`

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

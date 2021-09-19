import React, { useState, useEffect } from 'react';
import Card from './Card';
import Spinner from 'react-bootstrap/Spinner';

const Main = () => {
  const BASE_URL = "https://api.nasa.gov/planetary/apod?"
  const date = new Date()
  const year = date.getFullYear()
  const month = `${date.getMonth() + 1}`.padStart(2, "0")
  const start_date = `${year}-${month}`
const QUERY_URL = `${BASE_URL}&start_date=${start_date}-01&api_key=Qz4IQeu3yFMyzoyIhLsLu7FOb14yepGykHhDPGQD`

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    if (isMounted && items.length === 0) {
      fetchImages();
    }
    return () => {
      isMounted = false;
    };
    });

  const fetchImages = () => {
    const configObj = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }
    return fetch(QUERY_URL, configObj)
      .then(response => response.json())
      .then(data => saveImages(data))
  }

  const saveImages = (data) => {
    const images = []
    data.forEach(item => {
      images.push(item)
    })
    setItems([...items, images])
    setLoading(false)
  }

  const generateCards = () => {
    return items.map(item => {
      return item.map(item => {
          return <Card key={item.date} item={item} />
      })  
    })
  }

  return loading ? (
    <Spinner animation="border" role="status" className="m-5">
          <span className="visually-hidden">Loading...</span>
    </Spinner>
  ) : <main>{generateCards()}</main>
}
  
export default Main;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

const Main = () => {
    const BASE_URL = "https://api.nasa.gov/planetary/apod?"
    const date = new Date()
    const year = date.getFullYear()
    const month = `${date.getMonth() + 1}`.padStart(2, "0")
    const start_date = `${year}-${month}`
    const QUERY_URL = `${BASE_URL}&start_date=2021-09-01&api_key=${process.env.REACT_APP_NASA_API_KEY}`

    const [items, setItems] = useState([]);

    useEffect(() => {
        let isMounted = true;
        if (isMounted && items.length === 0) {
          fetchImages();
        }
        return () => {
          isMounted = false;
        };
    }, []);

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
          .then(data => setItems([...items, data]))
          // .then(generateCards())
    }

    const generateCards = () => {
         return items.map(item => {
            return item.map(item => {
                return <Link key={item.date} to={item.date} >
                    <Card key={item.date} item={item} />
                </Link>
            }) 
        })
    }

    return (
      <main>
          {generateCards()}
          {console.log(items)}
      </main>
    );
}
  
export default Main;
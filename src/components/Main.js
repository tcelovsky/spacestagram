import React, { useState, useEffect } from 'react';
import Card from './Card';

const BASE_URL = "https://images-api.nasa.gov/search?"
const QUERY_URL = `${BASE_URL}q=earth%20from%20space&media_type=image`

const Main = () => {
    const [items, setItems] = useState([]);

    // useEffect(() => {
    //     let isMounted = true;
    //     if (isMounted) {
    //       fetchImages();
    //     }
    //     return () => {
    //       isMounted = false;
    //     };
    // }, [fetchImages]);

    useEffect(() => {
        fetchImages()
    })

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
          .then(data => setItems([...items, data.collection.items]))
    }

    const generateCards = () => {
        return items.map(item => {
            return item.map(item => {
                return <Card key={item.data[0].nasa_id} item={item}/>
            }) 
        })
    }

    return (
      <main>
          {generateCards()}
      </main>
    );
}
  
export default Main;
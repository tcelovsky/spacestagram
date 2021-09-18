import React, { useEffect } from 'react';
import Card from './Card';

const BASE_URL = "https://images-api.nasa.gov/search?"
const QUERY_URL = `${BASE_URL}q=earth%20from%20space&media_type=image`

const Main = () => {

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
          fetchImages();
        }
        return () => {
          isMounted = false;
        };
      }, []);

    const  fetchImages = () => {
        const configObj = {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
          }
        }
        return fetch(QUERY_URL, configObj)
          .then(response => response.json())
          .then(data => console.log(data.collection.items))
        //  description = data.collection.items[0].data[0].description
        //  title = data.collection.items[0].data[0].title)
        //  date = data.collection.items[0].data[0].date_created
        //  href = data.collection.items[0].links[0].href
      }

    return (
      <main>
          <Card />
      </main>
    );
}
  
export default Main;
import React, { useEffect } from 'react';

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
          .then(data => console.log(data))
      }

    return (
      <main>
          Main
      </main>
    );
}
  
export default Main;
const BASE_URL = "https://api.nasa.gov/planetary/apod?api_key="
const QUERY_URL = `${BASE_URL}/launches`

export const fetchImages = () => {
    return () => {
      dispatch({ type: 'LOADING_IMAGES'})
      fetch(QUERY_URL)
        .then(response => {
          return response.json()
        })
        .then(responseJSON => {
          dispatch({ type: 'ADD_IMAGES', images: responseJSON })
        //   console.log(responseJSON)
        })
    }
  }
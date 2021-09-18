import React from 'react';

const Card = (item) => {
    
    return (
      <figure>
          <figcaption>{item.item.data[0].title}</figcaption>
          <img src={item.item.links[0].href} alt={item.item.data[0].title} />
          <div>{item.item.data[0].date_created}</div>
          <div>{item.item.data[0].description}</div>
      </figure>
    );
  }
  
export default Card;
  
import React from 'react';

const Card = (item) => {
    
    return (
      <figure>
          <figcaption>{item.item.title}</figcaption>
          <img src={item.item.url} alt={item.item.title} />
          <div>{item.item.copyright}</div>
          <div>{item.item.date}</div>
          <div>{item.item.explanation}</div>
      </figure>
    );
  }
  
export default Card;
  
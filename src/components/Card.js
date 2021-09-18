import '../styles/Card.css';

const Card = (item) => {
    return (
      <figure>
          <figcaption>{item.item.title}</figcaption>
          <img src={item.item.url} alt={item.item.title} />
          <p className="copyright">{item.item.copyright}</p>
          <p className="date">{item.item.date}</p>
          <p className="explanation">{item.item.explanation}</p>
      </figure>
    );
  }
  
export default Card;
  
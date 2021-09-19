import '../styles/Card.css';
import Like from './Like';

const Card = (item) => {
    return (
      <figure>
          <figcaption>{item.item.title}</figcaption>
          <img src={item.item.url} alt={item.item.title} />
          <p className="copyright">{item.item.copyright}</p>
          <p className="date">{item.item.date}<Like /></p>
          <p className="explanation">{item.item.explanation}</p>
      </figure>
    );
  }
  
export default Card;
  
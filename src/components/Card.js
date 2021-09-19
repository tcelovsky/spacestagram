import '../styles/Card.css';
import Like from './Like';

const Card = (item) => {
    return (
      <figure>
          <figcaption>{item.item.title}</figcaption>
          {item.item.media_type == "image" ? 
          <img src={item.item.url} alt={item.item.title} /> :
          <iframe src={item.item.url} title={item.item.title} />}
          <p className="copyright">{item.item.copyright}</p>
          <p className="date">{item.item.date}</p>
          <Like />
          <p className="explanation">{item.item.explanation}</p>
      </figure>
    );
  }
  
export default Card;
  
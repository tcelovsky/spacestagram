import './styles/Card.css';

const Card = (item) => {
    return (
      <figure>
          <figcaption>{item.item.title}</figcaption>
          <img src={item.item.url} alt={item.item.title} />
          <div className="copyright">{item.item.copyright}</div>
          <div className="date">{item.item.date}</div>
          <div className="explanation">{item.item.explanation}</div>
      </figure>
    );
  }
  
export default Card;
  
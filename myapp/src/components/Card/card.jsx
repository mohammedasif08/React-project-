import Discoverd from "../Discoverd/Discoverd";
import "./card.css";

function Card({ Image, title, description, isDiscover = false }) {
  return isDiscover ? (
    <Discoverd />
  ) : (
    <div className="card">
      <div className="card-container">
        <img src={Image} alt="Card 1" style={{ height: "210px", width:"300px"}} />
        <div className="card-content">
          <h2>{title} </h2>
          <p>{description}</p>
          <div className="read-more">
            READ MORE <span>&rarr;</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;

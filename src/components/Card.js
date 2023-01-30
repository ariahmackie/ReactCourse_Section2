import "../styles/card.css";

function Card({ img, alt, name, handle, info }) {
  return (
    <div className="card_container">
      <img className="img" src={img} alt={alt} />
      <h1>{name} </h1>
      <p>{handle} </p>
      <p>{info}</p>
    </div>
  );
}

export default Card;

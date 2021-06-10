import React from "react";
import "./Card.css";

function Card({ 
  id, 
  poster, 
  date, 
  title, 
  vote_average, 
  media_type 
}) {
  console.log(media_type)
  return (
    <div className="card">
      <div className="card_img">
        <img
          className="poster"
          src={poster ? "https://image.tmdb.org/t/p/w300" + poster : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png"}
          alt="img"
        />
      </div>
      <div className="card_details">
        <h3>{title}</h3>
        <div>
          <span>{media_type==='tv' ? "TV Series" :"Movie"}</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;

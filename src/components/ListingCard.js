import React, { useState } from "react";

function ListingCard({ description, location, image, id, onDelete }) {
  const [favoriteButton, setFavoriteButton] = useState(false)

  function changeFavoriteButton(){
    setFavoriteButton((favoriteButton) => !favoriteButton)
  }

  function handleDelete(){
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    })
    onDelete(id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favoriteButton ? (
          <button className="emoji-button favorite active" onClick={changeFavoriteButton}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={changeFavoriteButton}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;

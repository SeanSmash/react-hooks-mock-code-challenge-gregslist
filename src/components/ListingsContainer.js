import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";
// import ListingCard from "./ListingCard";

function ListingsContainer({ search }) {
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(r => r.json())
    .then(data => setListings(data))
  }, [])

  const listingsToDisplay = listings.filter(listing => {
    if (search.length > 0){
      return (listing.description.includes(search))
    } else return true
  })

  if (search.length > 0){
    console.log("search", search)
  }

  function handleDelete(listingID){
    const updatedListings = listings.filter(listing => listing.id === listingID ? null : true)
    setListings(updatedListings)
  }

  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {listingsToDisplay.map(listing => (
          <ListingCard 
            key={listing.id}
            description={listing.description}
            location={listing.location}
            image={listing.image}
            id={listing.id}
            onDelete={handleDelete}/>

        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;

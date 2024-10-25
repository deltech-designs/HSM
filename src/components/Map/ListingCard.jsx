// src/components/ListingCard.js
import React from "react";

const ListingCard = ({
  title,
  guests,
  beds,
  baths,
  price,
  reviews,
  imgUrl,
}) => {
  return (
    <div className="flex flex-col border shadow rounded-lg overflow-hidden mb-6">
      <img src={imgUrl} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-500 text-sm">
          {guests} · {beds} · {baths}
        </p>
        <p className="text-yellow-500 mt-2">⭐ {reviews} reviews</p>
        <div className="text-lg font-semibold mt-2">${price}/night</div>
      </div>
    </div>
  );
};

export default ListingCard;

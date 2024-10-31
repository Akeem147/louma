import React from "react";
import event from "../assets/event.jpg";

type EventCardProps = {
  image?: string;
  name: string;
  date: string;
  price: number;
  onDetailsClick: () => void;
};

const EventCard: React.FC<EventCardProps> = ({
  image = event,
  name,
  date,
  price,
  onDetailsClick,
}) => {
  return (
    <div className="rounded-lg shadow-lg p-4 bg-white">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-sm text-gray-500">{date}</p>
      <p className="text-md font-bold">${price}</p>
      <button
        onClick={onDetailsClick}
        className="mt-4 text-blue-500 hover:underline bg-gray-800"
      >
        View Details
      </button>
    </div>
  );
};

export default EventCard;

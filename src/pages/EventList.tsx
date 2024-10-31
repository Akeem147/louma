import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { events } from "../components/EventsData";

const EventList: React.FC = () => {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 pt-20 mb-4">
      {events.map((event) => (
        <motion.div
          key={event.id}
          className="bg-white rounded-lg shadow-md overflow-hidden w-full lg:w-[280px] h-[280px]"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-32 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{event.title}</h3>
            <p className="text-gray-600">{event.date}</p>
            <p className="text-gray-800 font-bold mb-4">${event.price}</p>
            <Link
              to={`/event/${event.id}`}
              className="mt-2 bg-black text-white p-2 text-sm rounded-md"
            >
              View Details
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default EventList;

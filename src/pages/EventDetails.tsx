import React, { useState } from "react";
import { motion } from "framer-motion";

interface Event {
  id: number;
  title: string;
  date: string;
  price: number;
  image: string;
  description: string;
  ticketTypes: { type: string; price: number }[];
}

interface Ticket {
  eventId: number;
  type: string;
  quantity: number;
  total: number;
}

interface EventDetailsProps {
  event: Event;
  onTicketSelect: (tickets: Ticket[]) => void;
}

const EventDetails: React.FC<EventDetailsProps> = ({
  event,
  onTicketSelect,
}) => {
  const [selectedTickets, setSelectedTickets] = useState<Ticket[]>([]);

  const handleQuantityChange = (
    type: string,
    price: number,
    quantity: number
  ) => {
    const updatedTickets = selectedTickets.filter(
      (ticket) => ticket.type !== type
    );
    if (quantity > 0) {
      updatedTickets.push({
        eventId: event.id,
        type,
        quantity,
        total: quantity * price,
      });
    }
    setSelectedTickets(updatedTickets);
    onTicketSelect(updatedTickets);
  };

  return (
    <motion.div
      className="p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-64 object-cover mb-4"
      />
      <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
      <p className="text-gray-600 mb-4">{event.date}</p>
      <p className="text-gray-800 mb-4">{event.description}</p>

      {event.ticketTypes.map((ticket) => (
        <motion.div
          key={ticket.type}
          className="mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <label className="text-lg">
            {ticket.type} - ${ticket.price}
          </label>
          <input
            type="number"
            min="0"
            className="ml-4 w-16 border rounded p-1"
            onChange={(e) =>
              handleQuantityChange(ticket.type, ticket.price, +e.target.value)
            }
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default EventDetails;

import { useParams, useNavigate } from "react-router-dom";
import { events } from "../components/EventsData";
import { useState } from "react";

interface EventDetailsWrapperProps {
  onAddTickets: any;
}

const EventDetailsWrapper: React.FC<EventDetailsWrapperProps> = () => {
  const { eventsId } = useParams<{ eventsId: string }>();
  const navigate = useNavigate();
  const event = events.find((e) => e.id === parseInt(eventsId || ""));

  const [selectedQuantities, setSelectedQuantities] = useState<{
    [key: number]: number;
  }>({});
  const [errorMessage, setErrorMessage] = useState<string>("");

  if (!event) {
    return <div>Event not found</div>;
  }

  const { image, title, date, description, ticketTypes } = event;

  const totalPrice = ticketTypes.reduce((total, ticket) => {
    const quantity = selectedQuantities[ticket.id] || 0;
    return total + quantity * ticket.price;
  }, 0);

  const totalQuantity = Object.values(selectedQuantities).reduce(
    (sum, quantity) => sum + quantity,
    0
  );

  const handleQuantityChange = (ticketId: number, quantity: number) => {
    setSelectedQuantities((prevQuantities) => ({
      ...prevQuantities,
      [ticketId]: quantity,
    }));
    setErrorMessage("");
  };

  const handleCheckout = () => {
    if (totalQuantity === 0) {
      setErrorMessage("Please select at least one ticket to proceed.");
      return;
    }

    const selectedTickets = ticketTypes
      .filter((ticket) => selectedQuantities[ticket.id] > 0)
      .map((ticket) => ({
        eventId: event.id,
        eventTitle: event.title,
        type: ticket.name,
        quantity: selectedQuantities[ticket.id],
        total: ticket.price * selectedQuantities[ticket.id],
      }));

    navigate("/checkout", { state: { selectedTickets } });
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="mt-10 p-4 flex flex-col lg:flex-row justify-center w-full h-screen">
      <div>
        <img
          className="lg:w-[240px] h-[240px] w-full pt-8 rounded-md"
          src={image}
          alt={title}
        />
        <h1 className="text-2xl font-bold pt-4">{title}</h1>
        <span className="text-gray-600">{date}</span>
        <p className="mt-4 font-medium">{description}</p>
      </div>

      <div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Ticket Types</h2>
          {ticketTypes.map((ticket) => (
            <div key={ticket.id} className="flex items-center mb-4">
              <label className="mr-4">
                {ticket.name} (${ticket.price}):
              </label>
              <select
                className="border rounded p-2"
                value={selectedQuantities[ticket.id] || 0}
                onChange={(e) =>
                  handleQuantityChange(ticket.id, parseInt(e.target.value))
                }
              >
                {[...Array(11).keys()].map((qty) => (
                  <option key={qty} value={qty}>
                    {qty}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <p className="font-semibold">Total Price: ${totalPrice}</p>
          {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        </div>

        <div className="flex flex-col gap-2">
          <button
            onClick={handleCheckout}
            disabled={totalQuantity === 0}
            className={`mt-6 px-6 py-2 rounded transition-all ${
              totalQuantity === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-black text-white hover:bg-slate-700"
            }`}
          >
            Continue to Checkout
          </button>
          <button
            onClick={handleGoBack}
            className="bg-black text-white px-6 py-2 rounded hover:bg-slate-700 transition-all"
          >
            Go back to home
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsWrapper;

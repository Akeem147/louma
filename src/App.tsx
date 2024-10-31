import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EventList from "./pages/EventList";
import CheckoutPage from "./pages/Checkout";
import EventDetailsWrapper from "./components/EventDetailsWrapper";
import { useState } from "react";
import About from "./pages/About";
import { Toaster } from "react-hot-toast";

interface Ticket {
  eventId: number;
  eventTitle: string;
  type: string;
  quantity: number;
  total: number;
}

const App: React.FC = () => {
  const [selectedTickets, setSelectedTickets] = useState<Ticket[]>([]);

  const handleAddTickets = (tickets: Ticket[]) => {
    setSelectedTickets(tickets);
  };

  return (
    <Router>
      <Toaster position="top-center" reverseOrder={false} />
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<EventList />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/event/:eventsId"
            element={<EventDetailsWrapper onAddTickets={handleAddTickets} />}
          />
          <Route
            path="/checkout"
            element={<CheckoutPage selectedTickets={selectedTickets} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

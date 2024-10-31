import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";

interface Ticket {
  eventId: number;
  eventTitle: string;
  type: string;
  quantity: number;
  total: number;
}

interface CheckoutPageProps {
  selectedTickets: Ticket[];
}

const CheckoutPage: React.FC<CheckoutPageProps> = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const storedTickets = JSON.parse(
    localStorage.getItem("selectedTickets") || "[]"
  );
  const storedFormData = JSON.parse(
    localStorage.getItem("formData") ||
      '{"name": "", "email": "", "payment": ""}'
  );

  const { selectedTickets = storedTickets } = location.state || {};
  const totalCost = selectedTickets.reduce(
    (sum: number, ticket: Ticket) => sum + ticket.total,
    0
  );

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState(storedFormData);

  useEffect(() => {
    localStorage.setItem("selectedTickets", JSON.stringify(selectedTickets));
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [selectedTickets, formData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData: Ticket) => {
      const updatedData = { ...prevData, [id]: value };
      localStorage.setItem("formData", JSON.stringify(updatedData));
      return updatedData;
    });
  };

  const handleCompletePurchase = () => {
    if (!formData.name || !formData.email || !formData.payment) {
      toast.error("All form fields are required before completing purchase", {
        position: "top-center",
      });
    } else {
      setShowModal(true);
    }
  };

  const handleConfirmPurchase = () => {
    toast.success("Purchase completed!", { position: "top-center" });
    localStorage.removeItem("selectedTickets");
    localStorage.removeItem("formData");
    navigate("/");
  };

  const handleCancelPurchase = () => {
    setShowModal(false);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <motion.div
      className={
        selectedTickets.length === 0
          ? "p-6 pt-20 bg-gray-100 rounded-lg shadow-lg text-center w-full h-screen"
          : "p-6 pt-20 bg-gray-100 rounded-lg shadow-lg text-center w-full h-auto"
      }
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Checkout</h2>
      {selectedTickets.length === 0 ? (
        <p className="text-gray-600">No tickets selected.</p>
      ) : (
        <>
          <motion.div
            className="mb-6"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Selected Tickets
            </h3>
            <motion.ul>
              {selectedTickets.map((ticket: Ticket, index: number) => (
                <motion.li
                  key={index}
                  className="bg-white p-4 mb-2 rounded shadow-md"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <p className="text-gray-800">
                    {ticket.eventTitle} - {ticket.type} x {ticket.quantity} - $
                    {ticket.total}
                  </p>
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-2xl font-bold mt-4 text-gray-900">
              Total: ${totalCost}
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              Your Information
            </h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-left text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-left text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="payment"
                  className="block text-left text-gray-600"
                >
                  Payment Info
                </label>
                <input
                  type="text"
                  id="payment"
                  placeholder="Credit Card Info"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                  value={formData.payment}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  onClick={handleCompletePurchase}
                  className="w-full bg-black text-white p-2 rounded hover:bg-slate-700"
                >
                  Complete Purchase
                </button>
                <button
                  type="button"
                  onClick={handleGoBack}
                  className="w-full bg-black text-white p-2 rounded hover:bg-slate-700"
                >
                  Go back
                </button>
              </div>
            </form>
          </motion.div>
        </>
      )}

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4">
              Are you sure you want to purchase?
            </h3>
            <div className="flex justify-between">
              <button
                onClick={handleConfirmPurchase}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Confirm
              </button>
              <button
                onClick={handleCancelPurchase}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default CheckoutPage;

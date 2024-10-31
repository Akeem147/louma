import React from "react";
import { motion } from "framer-motion";
import bg from "../assets/bg.png";

const About: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50 mt-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold text-gray-800 mb-6">About Louma</h1>
      <p className="text-lg text-gray-600 mb-4 max-w-xl text-center">
        Welcome to Louma, your ultimate destination for discovering and booking
        exciting events! We are a startup ticketing platform dedicated to
        connecting event enthusiasts with the best experiences in town, whether
        it’s concerts, festivals, workshops, or sports events.
      </p>
      <motion.img
        src={bg}
        alt="Event Illustration"
        className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Mission</h2>
      <p className="text-lg text-gray-600 mb-4 max-w-xl text-center">
        At Louma, our mission is to provide a seamless and user-friendly
        ticketing experience that empowers people to explore their passions and
        create unforgettable memories.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Vision</h2>
      <p className="text-lg text-gray-600 mb-4 max-w-xl text-center">
        We envision a world where every event is accessible and every experience
        is memorable. Our goal is to become the leading platform for event
        ticketing, making it easier for everyone to find and enjoy events that
        inspire them.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Why Choose Louma?
      </h2>
      <div className="max-w-xl text-center mb-4">
        <p className="text-lg text-gray-600 mb-2">
          At Louma, we prioritize your experience and satisfaction. Here’s why
          you’ll love using our platform:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-600 mb-4">
          <li className="py-3">
            ✨ *Tailored Recommendations:* Discover events that match your
            interests and preferences, helping you find the perfect experience.
          </li>
          <li className="py-3">
            💳 *Secure & Easy Checkout:* Our streamlined checkout process
            ensures your tickets are purchased safely and swiftly.
          </li>
          <li className="py-3">
            🔔 *Real-Time Updates:* Stay informed with notifications about
            upcoming events, exclusive offers, and last-minute changes.
          </li>
          <li className="py-3">
            🌟 *Community Engagement:* Join a vibrant community of event-goers,
            share experiences, and connect with like-minded individuals.
          </li>
          <li className="py-3">
            🤝 *Dedicated Support:* Our customer support team is here to assist
            you with any inquiries, ensuring a smooth experience from start to
            finish.
          </li>
        </ul>
      </div>
      <p className="text-lg text-gray-600 max-w-xl text-center">
        Join us on this exciting journey, and let Louma help you create lasting
        memories through unforgettable events!
      </p>
    </motion.div>
  );
};

export default About;

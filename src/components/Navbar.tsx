import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  return (
    <motion.nav
      className="bg-black p-4 flex justify-between items-center fixed top-0 w-full z-20 h-[60px]"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/" className="text-white text-lg font-bold">
        <img className="w-[80px] h-[60px]" src="/louma.jpg" alt="" />
      </Link>
      <div className="space-x-4">
        <Link to="/" className="text-white hover:text-white">
          Home
        </Link>
        <Link to="/about" className="text-white hover:text-white">
          About
        </Link>
        <Link to="/checkout" className="text-white hover:text-white">
          Checkout
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;

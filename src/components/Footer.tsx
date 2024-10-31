import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="bg-black p-4 text-center text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p>&copy; 2024 Louma Events Platform. All rights reserved.</p>
    </motion.footer>
  );
};

export default Footer;

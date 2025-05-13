import { useState } from "react";
import { motion } from "framer-motion";
import { MenuBar } from "./MenuBar";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="relative z-50">
        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-yellow-50 via-white to-yellow-50 shadow-md border-b border-yellow-100">
          <motion.div
            variants={itemVariants}
            className="text-xl font-semibold text-gray-700 tracking-wide"
          >
            Kasheenadhura
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-gray-600 hover:text-yellow-700 cursor-pointer transition-colors duration-200"
          >
            <button onClick={() => setMenuOpen((prev) => !prev)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </motion.div>
        </div>

        {/* MenuBar with animation already applied */}
        <MenuBar isVisible={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </motion.div>
  );
}

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function MenuBar({
  isVisible,
  onClose,
}: {
  isVisible: boolean;
  onClose: () => void;
}) {
  const popupRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible, onClose]);

  const menuItems = [
    "ॐ नमः शिवाय (Home)",
    "देवभूमि उत्तराखंड",
    "भारत के प्रसिद्ध शिव मंदिर",
    "UTTARAKHAND FESTIVAL (एतिहासिक पर्व)",
    "Bhajan",
    "Lyrics Keertan",
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: 10,
      transition: { duration: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={popupRef}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
          className="absolute right-6 top-16 z-50 flex flex-col items-start gap-3 w-64 bg-gradient-to-br from-yellow-50 via-white to-yellow-100 shadow-xl border border-yellow-100 rounded-md px-5 py-4"
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-gray-700 font-medium text-sm md:text-base hover:text-yellow-700 cursor-pointer transition duration-200"
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

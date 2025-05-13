import { motion } from "framer-motion";
import { itemVariants } from "./itemVariants";
export function HeadingCard({ heading }: { heading: string }) {
  return (
    <div>
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-gray-800 drop-shadow-sm"
        variants={itemVariants}
      >
        {heading}
      </motion.h1>
    </div>
  );
}

import { motion } from "framer-motion";
import { itemVariants } from "./itemVariants";
export function ParaCard({ para }: { para: string }) {
    
  return (
    <div>
      <motion.p
        className="text-base md:text-lg text-gray-800 mt-4 leading-relaxed"
        variants={itemVariants}
      >
        {para}
      </motion.p>
    </div>
  );
}

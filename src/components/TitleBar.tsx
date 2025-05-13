import { motion } from "framer-motion";
import { itemVariants } from "./itemVariants";

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
      staggerChildren: 0.2,
    },
  },
};


export function TitleBar( {title}: {title: string}) {
  return (
    <motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <div className="p-6 text-center bg-gradient-to-r from-yellow-100 via-white to-yellow-100 shadow-md rounded-md">
    <motion.h1
      variants={itemVariants}
      className="text-4xl md:text-5xl font-serif font-extrabold text-gray-900 drop-shadow-md"
    >
      {title}
    </motion.h1>
    <motion.div
      variants={itemVariants}
      className="mt-4 w-24 h-1 bg-yellow-500 mx-auto rounded-full"
    />
  </div>
</motion.div>

  );
}

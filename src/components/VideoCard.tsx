import {motion } from "framer-motion"
export function VideoCard({ link }: { link: string }) {
  return (
    <motion.div
      className="w-full p-4 rounded-2xl overflow-hidden shadow-lg bg-white bg-opacity-80 backdrop-blur-md my-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative pt-[56.25%]"> 
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
          src={link}
          title="YouTube video"
          allowFullScreen
        ></iframe>
      </div>
    </motion.div>
  );
}

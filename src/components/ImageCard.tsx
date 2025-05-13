import { motion } from "framer-motion";
import { itemVariants } from "./itemVariants";
import { ParaCard } from "./ParaCard";

export function ImageCard({ photo }: { photo: string }) {
  return (
    <div className="relative w-full my-8">
      <motion.div
        className="rounded-xl overflow-hidden shadow-xl"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{ scale: 1.02 }}
      >
        <img
          src={photo}
          alt="Sacred Place"
          className="w-full h-auto object-cover transition-transform duration-700 ease-in-out hover:scale-105 hover:rotate-1"
        />
      </motion.div>

      <motion.div
        className="relative z-10 mt-6 md:absolute md:bottom-6 md:left-6 md:w-2/3"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="block md:hidden absolute inset-0 rounded-xl bg-gradient-to-br from-yellow-100 via-white to-yellow-50 blur-2xl opacity-70" />

        <div className="relative bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg border border-yellow-200">
          <ParaCard para="देवों के देव महादेव, भगवान शिव जी के रूपों में से एक भगवान काशीन देव का मंदिर भारत में चीन और नेपाल की सीमा पर हिमालय पर्वत के समीप देवभूमि उत्तराखंड के पिथौरागढ़ जिले के ख्वांतड़ी ग्राम में प्राचीनकाल से स्थित है।" />
        </div>
      </motion.div>
    </div>
  );
}

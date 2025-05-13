import { Link } from "react-router-dom";
import nitin1 from "../assets/nitin1.jpeg";
import nitin2 from "../assets/nitin2.jpg";
import { motion } from "framer-motion";
import { ImageCard } from "./ImageCard";
import { VideoCard } from "./VideoCard";
import { itemVariants } from "./itemVariants";
import { containerVariants } from "./containerVariants";
import { ParaCard } from "./ParaCard";
import { HeadingCard } from "./HeadingCard";

export function ContentBar() {
  return (
    <motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  <div className="flex flex-col items-center justify-center bg-gradient-to-b from-yellow-100 via-white to-yellow-100 p-6 shadow-inner rounded-md">
    <HeadingCard heading="ॐ नमो भगवते रुद्राय ॐ नमः शिवाय" />

    <ParaCard para="वही शून्य है वही इकाई जिसके भीतर बसा शिवाय" />

    <ImageCard photo={nitin1} />

    <motion.div variants={itemVariants}>
      <Link
        to="/page1"
        className="mt-6 px-6 py-2 text-white bg-yellow-500 hover:bg-yellow-600 rounded-full shadow-lg transition-transform transform hover:scale-105"
      >
        Samant Family →
      </Link>
    </motion.div>

    <VideoCard link="https://www.youtube.com/embed/dBCjyaytzow" />
    <ImageCard photo={nitin2} />
    <VideoCard link="https://www.youtube.com/embed/dBCjyaytzow" />
    <ParaCard para="इस महान मंदिर की विशेषता है..." />
    <VideoCard link="https://www.youtube.com/embed/BexbivBlwRs" />
  </div>
</motion.div>

  );
}

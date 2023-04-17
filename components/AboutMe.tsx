import { motion } from "framer-motion";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

type AboutMeProps = {
  triggerAnimation: () => void;
};

const AboutMe: React.FC<AboutMeProps> = ({ triggerAnimation }) => {
  // Render your "About Me" component here
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 4, duration: 1 }}
      className="absolute top-0 w-full h-full  p-10  justify-center items-center"
    >
      <div className="flex flex-col justify-center items-center mx-10 my-10 rounded-lg bg-gray-200/20 p-4">
        <h1 className="text-white text-6xl font-heading">About Me</h1>
        <button
          onClick={triggerAnimation}
          className="bg-blue-500 text-white py-2 px-4 rounded mt-4 font-std text-widest"
        >
          <ArrowLeftIcon className="h-5 w-5 inline-block" />
        </button>
      </div>
    </motion.div>
  );
};

export default AboutMe;

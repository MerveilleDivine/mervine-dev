
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Construction, ArrowLeft, Calendar } from "lucide-react";

const InProgress = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 dark:from-zinc-900 dark:to-zinc-800">
      <motion.div 
        className="max-w-md w-full mx-auto text-center p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="flex justify-center mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: [0, 10, 0] }}
          transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
        >
          <div className="w-24 h-24 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center">
            <Construction size={48} className="text-yellow-500" />
          </div>
        </motion.div>
        
        <motion.h1 
          className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Coming Soon!
        </motion.h1>
        
        <motion.p 
          className="text-gray-600 dark:text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          I'm currently working on this project. Please check back later to see the completed website.
        </motion.p>
        
        <motion.div 
          className="flex flex-col gap-4 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div 
            className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-2"
            whileHover={{ scale: 1.05 }}
          >
            <Calendar size={18} />
            <span>Expected completion soon</span>
          </motion.div>
          
          <motion.button
            onClick={() => navigate("/")}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft size={18} />
            <span>Back to Portfolio</span>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default InProgress;

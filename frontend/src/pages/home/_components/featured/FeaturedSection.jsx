import { ArrowRight } from "lucide-react";
import MovieCard from "../../../../components/MovieCard";
import { dummyShowsData } from "../../../../assets/assets";
import BlueCircle from "./BlueCircle";
import { motion } from "motion/react";

const FeaturedSection = () => {
  return (
    <div className="relative container mx-auto px-4 py-16 overflow-hidden">
      <BlueCircle />

      {/* Header Section */}
      <div className="relative flex items-center justify-between mb-12">
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="w-1 h-8 bg-linear-to-b from-red-500 to-red-600 rounded-full"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          />
          <h2 className="text-3xl font-bold text-white">Now Showing</h2>
        </motion.div>

        <motion.button
          className="group flex items-center gap-3 px-6 py-3 bg-linear-to-r from-zinc-900 to-zinc-800 hover:from-red-600 hover:to-red-500 border border-zinc-700 hover:border-red-500 rounded-full text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>View All</span>
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </motion.button>
      </div>

      {/* Movies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {dummyShowsData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
          >
            <MovieCard movie={item} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;
import { useState } from "react";
import { dummyTrailers } from "../../../../assets/assets";
import BlueCircle from "./BlueCircle";
import ReactPlayer from "react-player";
import { motion } from "motion/react";

const TrailerSection = () => {
  const [trailer, setTrailer] = useState(dummyTrailers[0]);

  return (
    <div className="relative container mx-auto px-4 py-16 overflow-hidden">
      {/* Background Decorative Elements */}
      <BlueCircle />
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative flex items-center gap-4 mb-12"
      >
        <div className="w-1 h-8 bg-linear-to-b from-red-500 to-red-600 rounded-full" />
        <h2 className="text-3xl font-bold text-white">Trailers</h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Video Player */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden bg-black border border-zinc-800 shadow-2xl"
          >
            <ReactPlayer
              key={trailer.id}
              src={trailer.videoUrl}
              width="100%"
              height="500px"
              controls
              playing={false}
            />
          </motion.div>

          {/* Video Info */}
          <div className="mt-6 space-y-2">
            <h3 className="text-2xl font-bold text-white">{trailer.title}</h3>
            <p className="text-gray-400">{trailer.description}</p>
          </div>
        </div>

        {/* Trailer List */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white mb-4">
            More Trailers
          </h3>
          <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-900">
            {dummyTrailers.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                onClick={() => setTrailer(item)}
                className={`w-full group transition-all duration-300 ${
                  trailer.id === item.id
                    ? "ring-2 ring-red-500"
                    : "hover:ring-2 hover:ring-zinc-600"
                } rounded-xl overflow-hidden`}
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />

                  {/* Play Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-red-600/80 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-red-500">
                      <svg
                        className="w-6 h-6 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p
                      className={`text-sm font-semibold line-clamp-2 ${
                        trailer.id === item.id ? "text-red-400" : "text-white"
                      }`}
                    >
                      {item.title}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrailerSection;

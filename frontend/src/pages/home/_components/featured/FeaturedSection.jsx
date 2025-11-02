import { ArrowRight } from "lucide-react";
import MovieCard from "../../../../components/MovieCard";
import { dummyShowsData } from "../../../../assets/assets";
import BlueCircle from "./BlueCircle";

const FeaturedSection = () => {
  return (
    <div className="relative container mx-auto px-4 py-16 overflow-hidden">
      {/* Background Decorative Elements */}
      <BlueCircle />

      {/* Header Section */}
      <div className="relative flex items-center justify-between mb-12">
        <div className="flex items-center gap-4">
          <div className="w-1 h-8 bg-linear-to-b from-red-500 to-red-600 rounded-full"></div>
          <h2 className="text-3xl font-bold text-white">Now Showing</h2>
        </div>

        <button className="group flex items-center gap-3 px-6 py-3 bg-linear-to-r from-zinc-900 to-zinc-800 hover:from-red-600 hover:to-red-500 border border-zinc-700 hover:border-red-500 rounded-full text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30">
          <span>View All</span>
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </div>

      {/* Movies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {dummyShowsData.map((item) => (
          <div key={item.id}>
            <MovieCard movie={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;

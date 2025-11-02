import { Star, Clock } from "lucide-react";

const MovieCard = ({ movie }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gray-800 border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-500/10">
      {/* Image Container with Overlay */}
      <div className="relative overflow-hidden">
        <img
          src={movie.backdrop_path}
          alt={movie.title}
          loading="lazy"
         className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110 will-change-transform"

        />
        {/* linear Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent opacity-60"></div>

        {/* Rating Badge */}
        <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-yellow-500/30">
          <Star size={14} className="fill-yellow-500 text-yellow-500" />
          <span className="text-sm font-semibold text-yellow-500">
            {movie.vote_average.toFixed(1)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-4">
        {/* Title */}
        <h3 className="text-xl font-bold text-white leading-tight line-clamp-2 group-hover:text-red-500 transition-colors duration-300">
          {movie.title}
        </h3>

        {/* Meta Info */}
        <div className="flex items-center gap-3 text-sm text-gray-400">
          <span className="font-medium text-gray-300">
            {new Date(movie.release_date).getFullYear()}
          </span>
          <span className="w-1 h-1 rounded-full bg-gray-600"></span>
          <span className="line-clamp-1">
            {movie.genres
              .slice(0, 2)
              .map((genre) => genre.name)
              .join(", ")}
          </span>
          <span className="w-1 h-1 rounded-full bg-gray-600"></span>
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {movie.runtime}min
          </span>
        </div>

        {/* Button */}
        <button className="mt-2 w-full bg-linear-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-red-500/50 active:scale-95">
          Buy Tickets
        </button>
      </div>
    </div>
  );
};

export default MovieCard;

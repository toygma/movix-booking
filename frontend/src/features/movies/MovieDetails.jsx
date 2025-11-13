import { Star, Calendar, Clock, Play } from "lucide-react";
import { useParams, useNavigate } from "react-router";
import { dummyDateTimeData, dummyShowsData } from "../../assets/assets";
import DateSelect from "./_components/DateSelect";
import { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [visibleCount, setVisibleCount] = useState(2);

  useEffect(() => {
    const show = dummyShowsData.find((m) => m._id === id);
    if (show) {
      setMovie({
        ...show,
        dateTime: dummyDateTimeData,
      });
    }
  }, [id]);

  if (!movie) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Movie not found
          </h2>
          <button
            onClick={() => navigate("/movies")}
            className="px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-500 transition-colors"
          >
            Back to Movies
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section with Backdrop */}
      <div className="relative">
        <img
          src={movie?.backdrop_path}
          alt={movie?.title}
          className="w-full h-full object-cover"
        />
        <div className="md:absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent" />

        {/* Content Overlay */}
        <div className="md:absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-12 md:text-start text-center md:block flex flex-col items-center justify-center md:pt-0 pt-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-4">
              {movie?.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-white mb-6">
              <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full">
                <Star size={20} className="fill-yellow-500 text-yellow-500" />
                <span className="font-semibold">
                  {movie?.vote_average?.toFixed(1) || "N/A"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>
                  {movie?.release_date
                    ? new Date(movie.release_date).getFullYear()
                    : "N/A"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{movie?.runtime || "N/A"} min</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {movie?.genres?.map((genre) => (
                <span
                  key={genre.name}
                  className="px-4 py-2 bg-zinc-800/80 backdrop-blur-sm text-white rounded-full text-sm"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-xl transition-all hover:scale-105 active:scale-95">
                <Play size={20} fill="white" />
                Watch Trailer
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all">
                Buy Tickets
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
          <p className="text-gray-300 leading-relaxed">
            {movie?.overview ||
              "Experience an unforgettable journey with stunning visuals and captivating storytelling. This masterpiece brings together exceptional performances and breathtaking cinematography that will leave you wanting more."}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Movie Info
              </h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex justify-between py-2 border-b border-zinc-800">
                  <span className="text-gray-400">Release Date</span>
                  <span className="font-medium">
                    {movie?.release_date
                      ? new Date(movie.release_date).toLocaleDateString()
                      : "N/A"}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-zinc-800">
                  <span className="text-gray-400">Runtime</span>
                  <span className="font-medium">
                    {movie?.runtime || "N/A"} minutes
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-zinc-800">
                  <span className="text-gray-400">Rating</span>
                  <span className="font-medium">
                    {movie?.vote_average?.toFixed(1) || "N/A"}/10
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Genres</h3>
              <div className="flex flex-wrap gap-3">
                {movie?.genres?.map((genre) => (
                  <span
                    key={genre.name}
                    className="px-6 py-3 bg-zinc-900 text-white rounded-xl border border-zinc-800 hover:border-red-500 transition-colors"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <DateSelect datetime={movie?.dateTime} id={id} />

      <div className="w-full  max-w-7xl mx-auto">
        <p className="text-lg font-medium mt-20 mb-8 text-white">
          You May Also Like
        </p>
        <div className="grid grid-cols-3 gap-12">
          {dummyShowsData.slice(0, visibleCount).map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>

          {visibleCount < dummyShowsData.length && (
            <div className="flex justify-center items-center mt-20">
              <button
                onClick={() => setVisibleCount((prev) => prev + 2)} // 2 film daha ekle
                className="px-10 py-3 text-sm bg-pink-400 mb-4 hover:bg-pink-900 transition rounded-md cursor-pointer"
              >
                Show More
              </button>
            </div>
          )}
      </div>
    </div>
  );
};

export default MovieDetails;

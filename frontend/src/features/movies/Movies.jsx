import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { dummyShowsData } from "../../assets/assets";
import MovieCard from "../../components/MovieCard";
import Pagination from "../../components/Pagination";

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [currentPage, setCurrentPage] = useState(1); 
  
  const itemsPerPage = 4; 

  const genres = [
    "all",
    ...new Set(
      dummyShowsData.flatMap((movie) => movie.genres.map((g) => g.name))
    ),
  ];

  const filteredMovies = dummyShowsData.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesGenre =
      selectedGenre === "all" ||
      movie.genres.some((g) => g.name === selectedGenre);
    return matchesSearch && matchesGenre;
  });

  const totalPages = Math.ceil(filteredMovies.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentMovies = filteredMovies.slice(startIndex, endIndex);

  const handleSearch = (value) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handleGenreChange = (value) => {
    setSelectedGenre(value);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="relative pt-12">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-10 bg-linear-to-b from-red-500 to-red-600 rounded-full" /> 
            <h1 className="text-4xl font-bold text-white">All Movies</h1>
          </div>

          {/* Search & Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search movies..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
              />
            </div>

            {/* Genre Filter */}
            <div className="relative md:w-64">
              <Filter
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <select
                value={selectedGenre}
                onChange={(e) => handleGenreChange(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-red-500 transition-colors appearance-none cursor-pointer"
              >
                {genres.map((genre) => (
                  <option key={genre} value={genre}>
                    {genre === "all" ? "All Genres" : genre}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <p className="text-gray-400 mt-4">
            {filteredMovies.length}{" "}
            {filteredMovies.length === 1 ? "movie" : "movies"} found
          </p>
        </div>
      </div>

      {/* Movies Grid */}
      <div className="container mx-auto px-4 py-12">
        {filteredMovies.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-20 h-20 rounded-full bg-zinc-900 flex items-center justify-center mb-4">
              <Search className="text-gray-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              No movies found
            </h3>
            <p className="text-gray-400">Try adjusting your search or filter</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentMovies.map((movie) => ( 
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>

      {filteredMovies.length > 0 && (
        <Pagination 
          totalPages={totalPages} 
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default Movies;
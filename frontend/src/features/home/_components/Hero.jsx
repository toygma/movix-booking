import { Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { heroData } from "../constants/homeConstants";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); 

    return () => clearInterval(interval); 
  }, []);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % heroData.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + heroData.length) % heroData.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const currentMovie = heroData[activeIndex];

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {heroData.map((movie, index) => (
          <div
            key={movie.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={movie.background}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-start justify-center px-6 md:px-16 lg:px-36">
        <div
          className={`space-y-6 transition-all duration-700 ${
            isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
        >
          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
            {currentMovie.title}
          </h1>

          {/* Logo */}
          <img
            src={currentMovie.logo}
            alt={`${currentMovie.title} Logo`}
            className="h-8 md:h-10 lg:h-12"
          />

          {/* Movie Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm md:text-base text-gray-300">
            <span className="font-medium">{currentMovie.genres.join(" • ")}</span>

            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-red-500" />
              <span>{currentMovie.year}</span>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-red-500" />
              <span>{currentMovie.duration}</span>
            </div>

            <div className="flex items-center gap-1">
              <span className="text-yellow-500">★</span>
              <span>{currentMovie.rating}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 max-w-2xl text-sm md:text-base leading-relaxed">
            {currentMovie.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button className="px-8 py-3 bg-linear-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-500/50 hover:scale-105">
              Book Now
            </button>

            <button className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-300">
              Watch Trailer
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        disabled={isAnimating}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        disabled={isAnimating}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {heroData.map((_, index) => (
          <button
            key={index}
            onClick={() => !isAnimating && setActiveIndex(index)}
            className={`transition-all duration-300 ${
              index === activeIndex
                ? "w-8 h-2 bg-red-500"
                : "w-2 h-2 bg-white/50 hover:bg-white/80"
            } rounded-full`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-20">
        <div
          className="h-full bg-linear-to-r from-red-500 to-pink-500 transition-all duration-300"
          style={{ width: `${((activeIndex + 1) / heroData.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default Hero;
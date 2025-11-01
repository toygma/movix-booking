import { useNavigate } from "react-router";
import { assets } from "../assets/assets";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-red-500 rounded-full opacity-5 blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full opacity-5 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="text-center relative z-10 max-w-2xl">
        {/* 404 Number with Film Reel */}
        <div className="mb-8 relative">
          <h1 className="text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-linear-to-br from-red-500 via-purple-500 to-red-500 animate-pulse">
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className="space-y-6 mb-10">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="h-px w-16 not-odd:bg-linear-to-br from-transparent to-red-500"></div>
           <img src={assets.logo} alt="" className="w-32 h-32 object-cover rounded-full" />
            <div className="h-px w-16 bg-linear-to-l from-transparent to-red-500"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Scene Not Found
          </h2>

          <p className="text-xl text-purple-300 mb-2">
            Oops! This page seems to be out of frame
          </p>

          <p className="text-gray-400 max-w-md mx-auto">
            The movie you're looking for isn't showing in our cinema. Let's get
            you back to the main feature!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => navigate("/")}
            className="group relative px-8 py-4 bg-linear-to-br from-red-600 to-red-500 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-red-500/50 hover:scale-105"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span>Back to Home</span>
            </span>
            <div className="absolute inset-0 bg-linear-to-br from-red-700 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </button>

          <button
            onClick={() => navigate(-1)}
            className="px-8 py-4 bg-purple-600/20 text-purple-300 font-semibold rounded-lg border-2 border-purple-500/50 hover:bg-purple-600/30 hover:border-purple-400 transition-all duration-300 hover:scale-105"
          >
            Go Back
          </button>
        </div>

        {/* Decorative Film Strip */}
        <div className="mt-16 flex justify-center space-x-2 opacity-30">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-8 bg-purple-500 rounded-sm animate-pulse"
              style={{
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotFound;


const Loading = () => {
  return (
    <div className="fixed inset-0 bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Film Strip Animation */}
        <div className="relative">
          {/* Popcorn Icon */}
          <div className="mb-8 animate-bounce">
            <svg 
              className="w-24 h-24 mx-auto text-red-500" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M8.5 2c.83 0 1.5.67 1.5 1.5S9.33 5 8.5 5 7 4.33 7 3.5 7.67 2 8.5 2zm7 0c.83 0 1.5.67 1.5 1.5S16.33 5 15.5 5 14 4.33 14 3.5 14.67 2 15.5 2zm-3.5 0c.83 0 1.5.67 1.5 1.5S12.83 5 12 5s-1.5-.67-1.5-1.5S11.17 2 12 2zM5.64 5.89c0 .82.66 1.48 1.48 1.48.81 0 1.47-.66 1.47-1.48 0-.81-.66-1.47-1.47-1.47-.82 0-1.48.66-1.48 1.47zm11.24 0c0 .82.66 1.48 1.47 1.48.82 0 1.48-.66 1.48-1.48 0-.81-.66-1.47-1.48-1.47-.81 0-1.47.66-1.47 1.47zM19 8H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-1 10H6v-2h12v2zm0-4H6v-2h12v2z"/>
            </svg>
          </div>

          {/* Film Strip */}
          <div className="flex justify-center space-x-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-12 bg-red-500 rounded-sm animate-pulse"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  opacity: 0.3 + (i * 0.15)
                }}
              />
            ))}
          </div>

          {/* Loading Text */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white tracking-wider">
              <span className="inline-block animate-pulse">M</span>
              <span className="inline-block animate-pulse" style={{ animationDelay: '0.1s' }}>O</span>
              <span className="inline-block animate-pulse" style={{ animationDelay: '0.2s' }}>V</span>
              <span className="inline-block animate-pulse" style={{ animationDelay: '0.3s' }}>I</span>
              <span className="inline-block animate-pulse" style={{ animationDelay: '0.4s' }}>X</span>
            </h2>
            
            <div className="flex justify-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
              <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>

            <p className="text-purple-300 text-sm tracking-widest animate-pulse">
              Loading your cinema experience...
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-red-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
import Skeleton from "react-loading-skeleton";

const SkeletonPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header Skeleton */}
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-4">
          <Skeleton width={4} height={32} borderRadius={999} />
          <Skeleton width={192} height={32} />
        </div>
        <Skeleton width={128} height={48} borderRadius={999} />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="rounded-2xl overflow-hidden border border-zinc-800">
            {/* Image */}
            <Skeleton height={256} />
            
            {/* Content */}
            <div className="p-6 space-y-4 bg-zinc-900">
              {/* Title */}
              <Skeleton height={24} width="75%" />
              
              {/* Meta Info */}
              <Skeleton height={16} width="50%" />
              
              {/* Button */}
              <Skeleton height={44} borderRadius={12} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonPage;
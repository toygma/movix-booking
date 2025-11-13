import { useEffect, useState } from "react";
import { TrendingUp, DollarSign, Users, Film } from "lucide-react";
import { dummyDashboardData } from "../../assets/assets";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    totalBookings: 0,
    totalRevenue: 0,
    activeShows: [],
    totalUser: 0
  });

  const dashboardCards = [
    {
      title: "Toplam Rezervasyon",
      value: dashboardData.totalBookings || "0",
      icon: TrendingUp,
      color: "blue",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      title: "Toplam Gelir",
      value: `₺${dashboardData.totalRevenue?.toLocaleString() || "0"}`,
      icon: DollarSign,
      color: "green",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      title: "Aktif Gösterimler",
      value: dashboardData.activeShows?.length || "0",
      icon: Film,
      color: "purple",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      title: "Toplam Kullanıcı",
      value: dashboardData.totalUser || "0",
      icon: Users,
      color: "orange",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    }
  ];

  const fetchDashboardData = async () => {
    setDashboardData(dummyDashboardData);
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">Genel bakış ve istatistikler</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">{card.title}</p>
                  <h3 className="text-2xl font-bold text-gray-900 mt-2">{card.value}</h3>
                </div>
                <div className={`${card.bgColor} p-3 rounded-lg`}>
                  <Icon className={card.iconColor} size={24} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Active Shows Section */}
      {dashboardData.activeShows?.length > 0 && (
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Aktif Gösterimler</h2>
          <div className="space-y-3">
            {dashboardData.activeShows.map((show, index) => (
              <div
                key={show._id || index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div>
                    <p className="font-medium text-gray-900">
                      {show.movie?.title || show.movie || show.name || "Film Adı"}
                    </p>
                    {show.showDateTime && (
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(show.showDateTime).toLocaleString('tr-TR')}
                      </p>
                    )}
                  </div>
                </div>
                {show.showPrice && (
                  <span className="text-sm font-medium text-gray-700">
                    ₺{show.showPrice}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
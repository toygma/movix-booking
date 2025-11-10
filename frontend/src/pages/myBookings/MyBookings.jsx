import { useEffect, useState } from "react";
import { dummyBookingData } from "../../assets/assets";
import { formatTime } from "../../lib/helper";
import { Calendar, Clock, Ticket, CreditCard, CheckCircle2, XCircle } from "lucide-react";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [filter, setFilter] = useState('all'); 

  const getMyBookings = async () => {
    setBookings(dummyBookingData);
  };

  useEffect(() => {
    getMyBookings();
  }, []);

  const filteredBookings = bookings.filter(booking => {
    if (filter === 'paid') return booking.isPaid;
    if (filter === 'unpaid') return !booking.isPaid;
    return true;
  });

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Başlık */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-linear-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
            Biletlerim
          </h1>
          <p className="text-gray-400">Tüm rezervasyonlarınızı görüntüleyin</p>
        </div>

        {/* Filtreler */}
        <div className="flex gap-3 mb-8">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
              filter === 'all'
                ? 'bg-emerald-500 shadow-lg shadow-emerald-500/50'
                : 'bg-gray-700 hover:bg-gray-600'
            }`}
          >
            Tümü ({bookings.length})
          </button>
          <button
            onClick={() => setFilter('paid')}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
              filter === 'paid'
                ? 'bg-emerald-500 shadow-lg shadow-emerald-500/50'
                : 'bg-gray-700 hover:bg-gray-600'
            }`}
          >
            Ödendi ({bookings.filter(b => b.isPaid).length})
          </button>
          <button
            onClick={() => setFilter('unpaid')}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
              filter === 'unpaid'
                ? 'bg-emerald-500 shadow-lg shadow-emerald-500/50'
                : 'bg-gray-700 hover:bg-gray-600'
            }`}
          >
            Bekliyor ({bookings.filter(b => !b.isPaid).length})
          </button>
        </div>

        {/* Biletler */}
        {filteredBookings.length === 0 ? (
          <div className="text-center py-20">
            <Ticket className="w-20 h-20 mx-auto mb-4 text-gray-600" />
            <p className="text-xl text-gray-400">Henüz bilet bulunmuyor</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {filteredBookings.map((item) => {
              const time= formatTime(item.show.showDateTime);
              const date= (item.show.showDateTime).split("T")[0]
              
              return (
                <div
                  key={item._id}
                  className="bg-linear-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="flex flex-col md:flex-row">
                    
                    {/* Poster */}
                    <div className="md:w-48 h-64 md:h-auto shrink-0">
                      <img
                        src={item.show.movie.poster_path}
                        alt={item.show.movie.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* İçerik */}
                    <div className="flex-1 p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h2 className="text-2xl font-bold mb-2">{item.show.movie.title}</h2>
                          <div className="flex items-center gap-2 text-gray-400">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm">{formatTime(item.show.movie.runtime)}</span>
                          </div>
                        </div>
                        
                        {/* Ödeme Durumu Badge */}
                        <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                          item.isPaid 
                            ? 'bg-emerald-500/20 text-emerald-400' 
                            : 'bg-amber-500/20 text-amber-400'
                        }`}>
                          {item.isPaid ? (
                            <>
                              <CheckCircle2 className="w-4 h-4" />
                              <span className="text-sm font-medium">Ödendi</span>
                            </>
                          ) : (
                            <>
                              <XCircle className="w-4 h-4" />
                              <span className="text-sm font-medium">Bekliyor</span>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Detaylar */}
                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-start gap-3">
                          <Calendar className="w-5 h-5 text-emerald-500 mt-0.5" />
                          <div>
                            <p className="text-xs text-gray-500 mb-1">Tarih</p>
                            <p className="font-medium">{date}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Clock className="w-5 h-5 text-emerald-500 mt-0.5" />
                          <div>
                            <p className="text-xs text-gray-500 mb-1">Saat</p>
                            <p className="font-medium">{time}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Ticket className="w-5 h-5 text-emerald-500 mt-0.5" />
                          <div>
                            <p className="text-xs text-gray-500 mb-1">Koltuklar</p>
                            <p className="font-medium">{item.bookedSeats.join(", ")}</p>
                            <p className="text-xs text-gray-400 mt-1">{item.bookedSeats.length} koltuk</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <CreditCard className="w-5 h-5 text-emerald-500 mt-0.5" />
                          <div>
                            <p className="text-xs text-gray-500 mb-1">Toplam Tutar</p>
                            <p className="text-xl font-bold text-emerald-400">{item.amount} ₺</p>
                          </div>
                        </div>
                      </div>

                      {/* Aksiyon Butonları */}
                      <div className="flex gap-3 pt-4 border-t border-gray-700">
                        <button className="flex-1 py-2.5 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium transition-all duration-300">
                          Detayları Gör
                        </button>
                        {!item.isPaid && (
                          <button className="flex-1 py-2.5 bg-linear-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-emerald-500/50">
                            Ödeme Yap
                          </button>
                        )}
                        {item.isPaid && (
                          <button className="flex-1 py-2.5 bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/50">
                            Bileti İndir
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookings;

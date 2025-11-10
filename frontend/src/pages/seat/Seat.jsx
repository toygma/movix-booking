import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import { dummyDateTimeData, dummyShowsData } from "../../assets/assets";
import { useParams, useSearchParams } from "react-router";
import { formatTime } from "../../lib/helper";


const Seat = () => {
  const {id} = useParams()
  const [searchParams] = useSearchParams()
  const date = searchParams.get("date")
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [show, setShow] = useState(null);
  const [bookedSeats] = useState(["A3", "A4", "B5", "C6", "D4", "D5"]);

  useEffect(() => {
    const seatData = dummyShowsData.map((item)=>item._id === id)
    setShow({
      movie: seatData,
      dateTime: dummyDateTimeData,
    });
  }, []);

  const handleSeatClick = (seatId) => {
    if (bookedSeats.includes(seatId)) return;
    
    setSelectedSeats(prev => 
      prev.includes(seatId) 
        ? prev.filter(s => s !== seatId)
        : [...prev, seatId]
    );
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const renderSeats = (row, count = 10) => {
    return (
      <div className="flex items-center gap-2 mb-3" key={row}>
        <span className="text-sm font-semibold text-gray-400 w-6">{row}</span>
        <div className="flex gap-2">
          {Array.from({ length: count }, (_, i) => {
            const seatId = `${row}${i + 1}`;
            const isBooked = bookedSeats.includes(seatId);
            const isSelected = selectedSeats.includes(seatId);
            
            return (
              <button
                key={seatId}
                onClick={() => handleSeatClick(seatId)}
                disabled={isBooked}
                className={`
                  h-8 w-8 rounded-t-lg text-xs font-medium transition-all duration-200
                  ${isBooked 
                    ? 'bg-gray-700 cursor-not-allowed opacity-50' 
                    : isSelected 
                      ? 'bg-emerald-500 text-white scale-110 ' 
                      : 'bg-gray-600 hover:bg-gray-500 hover:scale-105'
                  }
                `}
              >
                {isBooked ? '✕' : ''}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  const totalPrice = selectedSeats.length * 150;

  return (
    <div className="min-h-screen bg-dlinear-to-br from-gray-900 via-gray-800 to-gray-900 text-white mt-24">
      <div className="flex flex-col lg:flex-row gap-8 px-4 md:px-8 lg:px-16 py-8 max-w-7xl mx-auto">
        
        {/* Sol Panel - Seans Seçimi */}
        <div className="lg:w-80 shrink-0">
          <div className="bg-dlinear-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6 lg:sticky lg:top-8 shadow-2xl">
            <div className="flex items-center gap-2 mb-6">
              <Clock className="w-5 h-5 text-emerald-500" />
              <h2 className="text-xl font-bold">Seans Saatleri</h2>
            </div>
            
            <div className="space-y-3">
              {show?.dateTime[date]?.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleTimeSelect(item.time)}
                  className={`
                    w-full p-4 rounded-xl transition-all duration-300
                    ${selectedTime === item.time
                      ? 'bg-emerald-500 shadow-lg shadow-emerald-500/50 scale-105'
                      : 'bg-gray-700/50 hover:bg-gray-700 hover:scale-102'
                    }
                  `}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">{formatTime(item.time)}</span>
                    <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                  </div>
                </button>
              ))}
            </div>

            {/* Özet Bilgisi */}
            {selectedSeats.length > 0 && (
              <div className="mt-8 p-4 bg-gray-700/50 rounded-xl border border-gray-600">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300">Seçilen Koltuk:</span>
                  <span className="font-semibold">{selectedSeats.length}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-300">Toplam:</span>
                  <span className="text-xl font-bold text-emerald-500">{totalPrice} ₺</span>
                </div>
                <button className="w-full py-3 bg-dlinear-to-r from-emerald-500 to-emerald-600 rounded-lg font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-emerald-500/50">
                  Devam Et
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Sağ Panel - Koltuk Düzeni */}
        <div className="flex-1">
          <div className="bg-dlinear-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 shadow-2xl">
            
            {/* Başlık */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2 bg-dlinear-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                Koltuk Seçimi
              </h1>
              <p className="text-gray-400">Lütfen koltuğunuzu seçin</p>
            </div>

            {/* Perde */}
            <div className="mb-12">
              <div className="h-1 bg-dlinear-to-r from-transparent via-gray-500 to-transparent mb-2"></div>
              <p className="text-center text-sm text-gray-500 font-medium">PERDE</p>
            </div>

            {/* Koltuklar */}
            <div className="flex justify-center mb-8">
              <div className="inline-block">
                {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map(row => renderSeats(row))}
              </div>
            </div>

            {/* Lejant */}
            <div className="flex justify-center gap-8 pt-6 border-t border-gray-700">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 bg-gray-600 rounded-t-lg"></div>
                <span className="text-sm text-gray-400">Müsait</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 bg-emerald-500 rounded-t-lg"></div>
                <span className="text-sm text-gray-400">Seçili</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 bg-gray-700 rounded-t-lg opacity-50"></div>
                <span className="text-sm text-gray-400">Dolu</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seat;
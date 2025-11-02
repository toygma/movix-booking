import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";

const DateSelect = ({ datetime, id }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();

  const handleBook = () => {
    if (!selectedDate) {
      toast.error("Please select a date first");
      return;
    }
    navigate(`/book/${id}?date=${selectedDate}`);
  };
  return (
    <div className="container mx-auto py-12 px-4 relative">
      <div className="bg-linear-to-l from-red-400 via-red-500 to-transparent blur-2xl p-6 rounded-lg shadow-lg absolute w-full"></div>
      <div className="flex flex-col md:flex-row  items-center justify-between gap-10 relative p-8 bg-pink-300/10 border border-pink-300 rounded-lg">
        <div className="flex flex-col gap-4 w-full">
          <h1 className="text-xl text-white font-semibold">Choose Date</h1>
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-4">
              <div>
                <ChevronLeftIcon className="w-6 h-6 text-white cursor-pointer" />
              </div>
              <div className="flex items-center gap-4 text-white">
                {Object.keys(datetime).map((date) => (
                  <button
                    key={date}
                    className={`flex flex-col items-center justify-center h-14 w-14 aspect-square rounded cursor-pointer ${selectedDate === date ? "bg-pink-600" : "bg-white/10"} hover:bg-pink-500 transition`}
                    onClick={() => setSelectedDate(date)}
                  >
                    <span>{new Date(date).getDate()}</span>
                    <span>
                      {new Date(date).toLocaleDateString("en-US", {
                        month: "short",
                      })}
                    </span>
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <ChevronRightIcon className="w-6 h-6 text-white cursor-pointer" />
              </div>
            </div>
            <div>
              <button onClick={handleBook} className="bg-white text-pink-600 font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-pink-50 transition">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateSelect;

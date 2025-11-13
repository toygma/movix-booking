const BlueCircle = () => {
  return (
    <div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-bl from-red-500/10 via-red-600/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-linear-to-tr from-purple-500/10 via-pink-600/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
    </div>
  );
};

export default BlueCircle;

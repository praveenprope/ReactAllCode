import React from "react";

const CricketPlayerCard = ({src,playerName,team}) => {
    console.log(src)
  return (
    <div className="bg-gray-900 flex justify-center items-center min-h-screen">
      <div className="max-w-sm bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition hover:scale-105">
        <img
           width="400px"
          src={src}
          alt="Cricket Player"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h2 className="text-white text-2xl font-bold mb-2">{playerName}</h2>
          <p className="text-gray-400 text-sm">Role: Batsman</p>
          <p className="text-gray-400 text-sm">Country: India</p>
          <p className="text-gray-400 text-sm mb-4">Team: {team}</p>
          <div className="flex items-center justify-between mt-4">
            <div className="text-center">
              <p className="text-2xl text-emerald-400 font-bold">13000</p>
              <p className="text-gray-400 text-xs">Runs</p>
            </div>
            <div className="text-center">
              <p className="text-2xl text-emerald-400 font-bold">50</p>
              <p className="text-gray-400 text-xs">Centuries</p>
            </div>
            <div className="text-center">
              <p className="text-2xl text-emerald-400 font-bold">300</p>
              <p className="text-gray-400 text-xs">Matches</p>
            </div>
          </div>
          <button className="mt-6 w-full bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold py-2 rounded">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default CricketPlayerCard;

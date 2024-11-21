import React, { useState } from 'react';

function BgChanger() {
  const [color, setColor] = useState('black');

  return (
    <>
      <div
        style={{ backgroundColor: color }}
        className="h-screen w-full flex justify-center items-center transition-colors duration-500 ease-in-out"
      >
        <div className="space-x-4 flex">
          <button
            onClick={() => setColor('red')}
            className="bg-red-500 text-white p-3 rounded-lg hover:bg-red-400 focus:outline-none transition-colors duration-300"
          >
            Red
          </button>
          <button
            onClick={() => setColor('blue')}
            className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-400 focus:outline-none transition-colors duration-300"
          >
            Blue
          </button>
          <button
            onClick={() => setColor('green')}
            className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-400 focus:outline-none transition-colors duration-300"
          >
            Green
          </button>
          <button
            onClick={() => setColor('yellow')}
            className="bg-yellow-500 text-white p-3 rounded-lg hover:bg-yellow-400 focus:outline-none transition-colors duration-300"
          >
            Yellow
          </button>
          <button
            onClick={() => setColor('purple')}
            className="bg-purple-500 text-white p-3 rounded-lg hover:bg-purple-400 focus:outline-none transition-colors duration-300"
          >
            Purple
          </button>
          <button
            onClick={() => setColor('pink')}
            className="bg-pink-500 text-white p-3 rounded-lg hover:bg-pink-400 focus:outline-none transition-colors duration-300"
          >
            Pink
          </button>
        </div>
      </div>
    </>
  );
}

export default BgChanger;

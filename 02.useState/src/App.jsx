import { useState } from 'react';

function App() {
  const [spans, setSpans] = useState([]); // Array to store span contents

  const handleAddSpan = () => {
    const value = document.getElementById('getValue').value;
    if (value.trim() === '') return; // Avoid creating empty spans
    setSpans([...spans, value]); // Add new value to the spans array
    document.getElementById('getValue').value = ''; // Clear input field
  };

  return (
    <div className="mainDiv w-full h-screen flex flex-col justify-center items-center bg-gradient-to-r from-red-500 to-yellow-500">
      {/* Input Section */}
      <div className="relative w-72">
        <input
          className="w-full px-4 py-2 rounded-lg shadow-lg focus:ring-4 focus:ring-yellow-300 outline-none bg-black text-white placeholder-gray-500 pr-16"
          type="text"
          placeholder="Type something..."
          id="getValue"
        />
        <button
          className="absolute top-0 right-0 h-full px-4 bg-yellow-400 text-black font-semibold rounded-r-lg hover:bg-yellow-500 focus:ring-2 focus:ring-yellow-200"
          onClick={handleAddSpan}
        >
          Submit
        </button>
      </div>

      {/* Output Section */}
      <div className="outPut mt-8 text-center">
        <div className="text space-y-4">
          {spans.map((span, index) => (
            <span
              key={index}
              className="text-3xl font-bold text-white bg-black px-4 py-2 rounded-md shadow-md block"
            >
              {span}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

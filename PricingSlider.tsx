import { useState } from "react";

export default function PricingSlider() {
  const [isYearly, setIsYearly] = useState(false);
  const [index, setIndex] = useState(2);

  const pricing = [10, 20, 30, 40, 50];

  const handleSliderChange = (e) => {
    setIndex(Number(e.target.value));
  };

  return (
    <div className="flex flex-col items-center mt-6">
      <input
        type="range"
        min="0"
        max="4"
        value={index}
        onChange={handleSliderChange}
        className="w-60"
      />
      <p className="text-lg font-semibold mt-2">
        ${isYearly ? pricing[index] * 10 : pricing[index]} / {isYearly ? "year" : "month"}
      </p>
      <div className="flex items-center gap-3 mt-4">
        <span>Monthly</span>
        <button
          onClick={() => setIsYearly(!isYearly)}
          className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 
            ${isYearly ? "bg-green-500" : ""}`}
        >
          <div className={`w-5 h-5 bg-white rounded-full shadow-md transform 
            ${isYearly ? "translate-x-6" : ""}`} />
        </button>
        <span>Yearly</span>
      </div>
    </div>
  );
}

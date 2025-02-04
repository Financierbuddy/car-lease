import { fraudData } from "@/constant/fraudData";
import React from "react";

const TopZonesList = () => {
  return (
    <div className="w-1/3 bg-white shadow-md rounded-md p-4">
      <h3 className="text-lg font-semibold mb-4">Top Hot Zones</h3>
      <ul>
        {fraudData.map((zone, index) => (
          <li
            key={index}
            className="flex justify-between py-2 border-b last:border-b-0"
          >
            <span className="text-gray-700">
              {index + 1}. {zone.name || "Unknown"}
            </span>
            <span className="font-medium text-gray-900">{zone.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopZonesList;

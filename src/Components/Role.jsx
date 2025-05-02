// src/Components/Role.jsx
import React from 'react';

const Role = ({ role, level }) => {
  return (
    <div className="w-full my-2">
      <div className="flex justify-between mb-1">
        <span className="text-md font-medium text-gray-700">{role}</span>
        <span className="text-sm text-gray-500">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-gradient-to-r from-orange-400 to-yellow-400 h-2 rounded-full transition-all duration-700 ease-out"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Role;

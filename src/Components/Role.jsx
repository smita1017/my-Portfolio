import React from 'react'

const Role = ({ role, level }) => {
  return (
<div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium text-gray-800">{role}</span>
        <span className="text-sm text-gray-500">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 h-2 rounded-full">
        <div
          className="bg-orange-500 h-2 rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>  )
}

export default Role
import React, { act } from 'react'
import man2image from './../images/man2image.jpeg';

const Headers = ({item}) => {
    console.log(item)
  return (
    <header className="w-full flex justify-between items-center px-6 py-4 border-b bg-white">
    <h1 className="text-xl font-semibold">{item}</h1>
    <div className="flex items-center space-x-4">
      <div className="relative">
        <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
        <svg
          xmlns={<img src={man2image} alt="Icon" className="h-6 w-6" />}
          className="h-6 w-6 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 17h5l-1.405-1.405C18.21 14.79 18 14.21 18 13.586V11a6 6 0 10-12 0v2.586c0 .624-.21 1.204-.595 1.621L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
      </div>
      <div className="flex items-center space-x-2">
        <img
          src={man2image}
          alt="User Avatar"
          className="w-8 h-8 rounded-full"
        />
        <div className="text-right">
          <p className="text-sm font-medium">Kadin Stanton</p>
          <p className="text-xs text-gray-500">kadinstanton@gmail.com</p>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Headers
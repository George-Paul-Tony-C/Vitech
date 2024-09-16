import React from "react";

export default function EventCard() {
  return (
    <div className='max-w-sm rounded-lg overflow-hidden shadow-lg bg-white'>
      <img
        className='w-full h-48 object-cover'
        src='https://example.com/event-image.jpg' // Replace with your image URL
        alt='Event'
      />
      <div className='p-4'>
        <h3 className='text-xl font-bold text-blue-600'>
          Sunday Fundays: Museum Detectives
        </h3>
        <div className='text-gray-600 mt-2 flex items-center space-x-2'>
          <span className='flex items-center space-x-1'>
            <svg
              className='w-5 h-5 text-gray-500'
              fill='currentColor'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
            >
              <path d='M19 3h-14c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h14c1.104 0 2-.896 2-2v-14c0-1.104-.896-2-2-2zm0 16h-14v-14h14v14zm-7-6c2.209 0 4-1.791 4-4s-1.791-4-4-4-4 1.791-4 4 1.791 4 4 4zm0 2c-2.672 0-8 1.337-8 4v2h16v-2c0-2.663-5.328-4-8-4z' />
            </svg>
            <p>Sunday 10 November 2024</p>
          </span>
        </div>
        <div className='text-gray-600 mt-2 flex items-center space-x-2'>
          <span className='flex items-center space-x-1'>
            <svg
              className='w-5 h-5 text-gray-500'
              fill='currentColor'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
            >
              <path d='M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0-14c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm-4 6c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2zm8 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2z' />
            </svg>
            <p>Claremont Museum</p>
          </span>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

export default function SidebarUser({ setCurrentPage }) {
  return (
    <div className="bg-blue-800 text-white w-64 p-4">
      <h2 className="text-2xl font-bold mb-6">User Menu</h2>
      <ul>
        <li className="mb-4">
          <button onClick={() => setCurrentPage('events')} className='mb-1 text-lg'>
            Events
          </button>
        </li>
        <li className="mb-4">
          <button onClick={() => setCurrentPage('merchandise')} className='mb-1 text-lg'>
            Merchandise
          </button>
        </li>
        <li className="mb-4">
          <button onClick={() => setCurrentPage('orders')} className='mb-1 text-lg'>
            Orders
          </button>
        </li>
        <li className="mb-4">
        <Link to="/user/queries" className="mb-1 text-lg">
            Queries
            </Link>
        </li>
        <li className="mb-4">
          <Link to="/user/idea-forum" className="mb-1 text-lg">
            Idea Forum
          </Link>
        </li>
      </ul>
    </div>
  );
}

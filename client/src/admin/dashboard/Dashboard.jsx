import { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

import Chart from '../../components/Chart';

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 relative z-0">
        {/* Search Bar and Profile Icon */}
        <div className="flex justify-between items-center mb-6">
          {/* Search Bar */}
          <div className="relative w-full lg:w-1/2">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg
              className="w-5 h-5 absolute left-3 top-3 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 4a6 6 0 100 12 6 6 0 000-12zM22 22l-4.35-4.35"
              />
            </svg>
          </div>

          {/* Profile Icon */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img
                className="w-10 h-10 rounded-full object-cover"
                src="https://via.placeholder.com/150"
                alt="Profile"
              />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div className="text-gray-700">Admin</div>
          </div>
        </div>

         {/* Dashboard Cards */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {/* Total Events Card */}
          <div className="p-6 bg-blue-500 text-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-lg font-semibold">Total Events</h2>
            <p className="text-4xl font-bold mt-2">15</p>
            <Link to="/admin/events">
              <button className="mt-4 bg-white text-black py-2 px-4 rounded hover:bg-gray-200 transition duration-300">
                View Details
              </button>
            </Link>
          </div>

          {/* Total Registrations Card */}
          <div className="p-6 bg-yellow-500 text-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-lg font-semibold">Total Registrations</h2>
            <p className="text-4xl font-bold mt-2">1200</p>
            <Link to="/admin/participants">
            <button className="mt-4 bg-white text-black py-2 px-4 rounded hover:bg-gray-200 transition duration-300">
              View Details
            </button>
            </Link>
          </div>

          {/* Most Popular Event Card */}
          <div className="p-6 bg-green-500 text-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-lg font-semibold">Most Popular Event</h2>
            <p className="text-4xl font-bold mt-2">Hackathon</p>
            <button className="mt-4 bg-white text-black py-2 px-4 rounded hover:bg-gray-200 transition duration-300">
              View Details
            </button>
          </div>

          {/* Merchandise Sales Card */}
          <div className="p-6 bg-red-500 text-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-lg font-semibold">Merchandise Sales</h2>
            <p className="text-4xl font-bold mt-2">150</p>
            <Link to="/admin/merchandise">
            <button className="mt-4 bg-white text-black py-2 px-4 rounded hover:bg-gray-200 transition duration-300">
              View Details
            </button>
            </Link>
          </div>
        </div>


        {/* Charts */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-lg font-bold">Event Registrations Trend</h3>
            <Chart type="line" />
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-lg font-bold">Merchandise Sales</h3>
            <Chart type="bar" />
          </div>
        </div>
      </div>
    </div>
  );
}

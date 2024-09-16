import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const [active, setActive] = useState(false);

  const menuItems = [
    { name: 'Dashboard', link: '/admin/dashboard', icon: 'fas fa-tachometer-alt' },
    { name: 'Events', link: '/admin/events', icon: 'fas fa-calendar-alt' },
    { name: 'Create Event', link: '/admin/create-event', icon: 'fas fa-plus-circle' },
    { name: 'Participants', link: '/admin/participants', icon: 'fas fa-users' },
    { name: 'Merchandise', link: '/admin/merchandise', icon: 'fas fa-store' },
  ];

  return (
    <div className="relative h-screen flex flex-col bg-gradient-to-r from-indigo-600 to-blue-500 text-white w-64 lg:w-72 transition-all duration-500 transform hover:translate-x-1">
      <div className="flex items-center justify-center py-6">
        <h2 className="text-3xl font-bold tracking-widest">Admin Panel</h2>
      </div>

      {/* Menu Items */}
      <ul className="mt-8 space-y-4 px-4">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.link}
              className="flex items-center space-x-4 p-3 hover:bg-white hover:bg-opacity-20 transition-all rounded-md group"
            >
              <i className={`${item.icon} text-xl group-hover:animate-bounce`}></i>
              <span className="group-hover:translate-x-1 transition-transform duration-300 text-lg font-medium">
                {item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Toggle Animation
      <button
        onClick={() => setActive(!active)}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white text-indigo-600 rounded-full flex items-center justify-center hover:bg-gray-200 transition-all duration-300"
      >
        <svg
          className={`w-6 h-6 transition-transform duration-500 ${active ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button> */}

      {/* Active Animation */}
      {/* {active && (
        <div className="absolute inset-x-0 bottom-0 bg-gray-100 bg-opacity-80 rounded-t-lg p-4 shadow-lg transition-all transform duration-500 ease-in-out">
          <p className="text-indigo-600 font-semibold">Toggle Sidebar Animation</p>
        </div>
      )} */}
    </div>
  );
}

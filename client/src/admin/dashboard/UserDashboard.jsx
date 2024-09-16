import { useState } from 'react';
import Sidebaruser from '../../components/SidebarUser';
import EventCard from '../../components/Eventcard';
import MerchandiseCard from '../../components/MerchandiseCard';

const events = [
  { id: 1, title: 'Sunday Fundays: Museum Detectives', date: '10 November 2024', location: 'Claremont Museum' },
  { id: 2, title: 'Music Fest', date: '25 November 2024', location: 'City Hall' },
  { id: 3, title: 'Hackathon 2024', date: '15 December 2024', location: 'University Campus' },
  { id: 4, title: 'Art Exhibition', date: '20 December 2024', location: 'Art Museum' },
  { id: 5, title: 'Tech Talk', date: '5 January 2025', location: 'Tech Center' },
  { id: 6, title: 'Winter Fest', date: '10 January 2025', location: 'Park Avenue' },
  // Add more events if needed
];

const merchandiseItems = [
  { id: 1, productName: 'T-shirt', productImage: 'https://example.com/tshirt.jpg', productPrice: 500, productQuantity: 50 },
  { id: 2, productName: 'Mug', productImage: 'https://example.com/mug.jpg', productPrice: 300, productQuantity: 30 },
  { id: 3, productName: 'Cap', productImage: 'https://example.com/cap.jpg', productPrice: 200, productQuantity: 20 },
  { id: 1, productName: 'T-shirt', productImage: 'https://example.com/tshirt.jpg', productPrice: 500, productQuantity: 50 },
  { id: 2, productName: 'Mug', productImage: 'https://example.com/mug.jpg', productPrice: 300, productQuantity: 30 },
  { id: 3, productName: 'Cap', productImage: 'https://example.com/cap.jpg', productPrice: 200, productQuantity: 20 },
  // Add more merchandise items if needed
];

export default function UserDashboard() {
  const [currentPage, setCurrentPage] = useState('events');
  const [currentEventPageNumber, setCurrentEventPageNumber] = useState(1);
  const [currentMerchandisePageNumber, setCurrentMerchandisePageNumber] = useState(1);
  const cardsPerPage = 3;
  const [searchTerm, setSearchTerm] = useState('');

  // Filtered events based on search term
  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filtered merchandise
  const filteredMerchandise = merchandiseItems.filter(item =>
    item.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic for events
  const indexOfLastEventCard = currentEventPageNumber * cardsPerPage;
  const indexOfFirstEventCard = indexOfLastEventCard - cardsPerPage;
  const currentEventCards = filteredEvents.slice(indexOfFirstEventCard, indexOfLastEventCard);
  const totalEventPages = Math.ceil(filteredEvents.length / cardsPerPage);

  // Pagination logic for merchandise
  const indexOfLastMerchandiseCard = currentMerchandisePageNumber * cardsPerPage;
  const indexOfFirstMerchandiseCard = indexOfLastMerchandiseCard - cardsPerPage;
  const currentMerchandiseCards = filteredMerchandise.slice(indexOfFirstMerchandiseCard, indexOfLastMerchandiseCard);
  const totalMerchandisePages = Math.ceil(filteredMerchandise.length / cardsPerPage);

  return (
    <div className="relative flex flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebaruser setCurrentPage={setCurrentPage} />

      {/* Main Content */}
      <div className="flex-1 p-6 relative z-0">
        {/* Search Bar */}
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-full lg:w-1/2">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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
        </div>

        {/* Render Event or Merchandise Content */}
        {currentPage === 'events' ? (
          <>
            <div className="text-center text-3xl font-bold mt-10 mb-20">Events</div>

            {/* Event Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {currentEventCards.map((event) => (
                <EventCard key={event.id} title={event.title} date={event.date} location={event.location} />
              ))}
            </div>

            {/* Pagination for Events */}
            <div className="flex justify-center space-x-2">
              {[...Array(totalEventPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentEventPageNumber(i + 1)}
                  className={`py-2 px-4 rounded-lg ${currentEventPageNumber === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="text-center text-3xl font-bold mt-10 mb-20">Merchandise</div>

            {/* Merchandise Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {currentMerchandiseCards.map((item) => (
                <MerchandiseCard
                  key={item.id}
                  productName={item.productName}
                  productImage={item.productImage}
                  productPrice={item.productPrice}
                  productQuantity={item.productQuantity}
                  onPayNow={() => alert(`Paying for ${item.productName}`)} // Implement payment handler
                />
              ))}
            </div>

            {/* Pagination for Merchandise */}
            <div className="flex justify-center space-x-2">
              {[...Array(totalMerchandisePages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentMerchandisePageNumber(i + 1)}
                  className={`py-2 px-4 rounded-lg ${currentMerchandisePageNumber === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

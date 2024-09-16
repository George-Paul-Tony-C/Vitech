import React, { useState } from 'react';

const participantsData = [
  // Simulate participant data
  { id: 1, name: 'John Doe', email: 'john@example.com', event: 'Hackathon' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', event: 'Music Fest' },
  // Add more participant data up to at least 50 participants for testing pagination
];

const Participants = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const participantsPerPage = 15;

  // Calculate the current participants to display
  const indexOfLastParticipant = currentPage * participantsPerPage;
  const indexOfFirstParticipant = indexOfLastParticipant - participantsPerPage;
  const currentParticipants = participantsData.slice(indexOfFirstParticipant, indexOfLastParticipant);

  // Function to handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(participantsData.length / participantsPerPage);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Participants List</h2>

      {/* Participants Table */}
      <table className="min-w-full bg-white shadow-lg rounded-lg">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-left">ID</th>
            <th className="py-2 px-4 border-b text-left">Name</th>
            <th className="py-2 px-4 border-b text-left">Email</th>
            <th className="py-2 px-4 border-b text-left">Event</th>
          </tr>
        </thead>
        <tbody>
          {currentParticipants.map((participant) => (
            <tr key={participant.id}>
              <td className="py-2 px-4 border-b">{participant.id}</td>
              <td className="py-2 px-4 border-b">{participant.name}</td>
              <td className="py-2 px-4 border-b">{participant.email}</td>
              <td className="py-2 px-4 border-b">{participant.event}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        {[...Array(totalPages).keys()].map((page) => (
          <button
            key={page + 1}
            onClick={() => paginate(page + 1)}
            className={`px-4 py-2 mx-1 rounded-lg ${
              currentPage === page + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'
            }`}
          >
            {page + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Participants;

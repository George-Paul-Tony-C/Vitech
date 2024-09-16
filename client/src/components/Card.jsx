import { useNavigate } from 'react-router-dom';

export default function Card({ title, date, description, eventId }) {
  const navigate = useNavigate();

  const handleViewDetailsClick = () => {
    navigate(`/events/${eventId}`); // Navigate to the event details page
  };

  const handleEditClick = () => {
    navigate(`/admin/events/edit/${eventId}`); // Navigate to the edit event page
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-gray-500">{date}</p>
      <p className="text-gray-700">{description}</p>
      <button
        onClick={handleViewDetailsClick}
        className="mt-4 bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600"
      >
        View details
      </button>
      <button
        onClick={handleEditClick}
        className="mt-4 bg-gray-200 text-black py-1 px-2 rounded ml-2 hover:bg-gray-300"
      >
        Edit
      </button>
    </div>
  );
}

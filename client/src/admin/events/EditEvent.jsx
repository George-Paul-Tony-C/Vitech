import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // To get event ID from URL

const EditEvent = ({ eventsData }) => {
  const { eventId } = useParams(); // Extract eventId from URL
  const [eventData, setEventData] = useState(null);

  // Fetch the event data using the eventId (can be from props or API)
  useEffect(() => {
    const event = eventsData.find(event => event.id === parseInt(eventId)); // Find event by ID
    setEventData(event);
  }, [eventId, eventsData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    console.log('Updated Event:', eventData); // Save changes (API call can be made here)
    alert('Event updated successfully!');
  };

  if (!eventData) return <div>Loading...</div>; // Loading state

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Edit Event</h2>
      <form onSubmit={handleSaveChanges} className="bg-white shadow-lg rounded-lg p-6">
        {/* Prepopulate form fields */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Event Name</label>
          <input
            type="text"
            name="name"
            value={eventData.name}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Event Description</label>
          <textarea
            name="description"
            value={eventData.description}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-lg"
            rows="4"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Registration Open</label>
          <input
            type="datetime-local"
            name="registrationOpen"
            value={eventData.registrationOpen}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* Add other fields for start time, end time, location, etc. */}
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditEvent;

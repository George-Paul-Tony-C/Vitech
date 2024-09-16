import { useState } from 'react';

const CreateEvent = () => {
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [registrationOpen, setRegistrationOpen] = useState('');
  const [registrationClose, setRegistrationClose] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [location, setLocation] = useState('');
  const [capacity, setCapacity] = useState('');
  const [image, setImage] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', eventName);
    formData.append('description', eventDescription);
    formData.append('registrationOpen', registrationOpen);
    formData.append('registrationClose', registrationClose);
    formData.append('startTime', startTime);
    formData.append('endTime', endTime);
    formData.append('location', location);
    formData.append('capacity', capacity);
    formData.append('image', image);

    console.log('Form Submitted', {
      eventName,
      eventDescription,
      registrationOpen,
      registrationClose,
      startTime,
      endTime,
      location,
      capacity,
      image,
    });

    setSuccess(true);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Create New Event</h2>

      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6">
        {/* Event Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Event Name</label>
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* Event Description */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-lg"
            rows="4"
            required
          />
        </div>

        {/* Registration Open */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Registration Open</label>
          <input
            type="datetime-local"
            value={registrationOpen}
            onChange={(e) => setRegistrationOpen(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* Registration Close */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Registration Close</label>
          <input
            type="datetime-local"
            value={registrationClose}
            onChange={(e) => setRegistrationClose(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* Start Time */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Start Time</label>
          <input
            type="datetime-local"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* End Time */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">End Time</label>
          <input
            type="datetime-local"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* Capacity */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Capacity</label>
          <input
            type="number"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* Image Upload */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Event Image</label>
          <input
            type="file"
            onChange={handleImageUpload}
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
          Create Event
        </button>

        {success && <p className="mt-4 text-green-500">Event Created Successfully!</p>}
      </form>
    </div>
  );
};

export default CreateEvent;

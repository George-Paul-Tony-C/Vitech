import React from 'react';
import Card from '../../components/Card';  // Import the updated Card component

const events = [
  {
    id: 1,
    title: 'Hackathon 2024',
    date: 'March 10, 2024',
    description: 'A 48-hour hackathon focusing on AI, Blockchain, and more.',
  },
  {
    id: 2,
    title: 'Music Fest',
    date: 'April 5, 2024',
    description: 'An event for music enthusiasts, showcasing bands and solo performances.',
  },
  {
    id: 3,
    title: 'Art Exhibition',
    date: 'May 15, 2024',
    description: 'A display of visual art from students across the university.',
  },
];

const EventListing = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Event Listing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <Card
            key={event.id}
            title={event.title}
            date={event.date}
            description={event.description}
            eventId={event.id}
          />
        ))}
      </div>
    </div>
  );
};

export default EventListing;

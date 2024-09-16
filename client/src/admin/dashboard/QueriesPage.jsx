import React, { useState } from 'react';

// Sample private queries data
const initialQueries = [
  { id: 1, question: 'When will the event pass be issued?', response: 'The pass will be issued 2 days before the event.' },
  { id: 2, question: 'What is the event location?', response: 'The event will be held at the University Auditorium.' },
];

export default function QueriesPage() {
  const [queries, setQueries] = useState(initialQueries);
  const [newQuery, setNewQuery] = useState('');

  // Function to post a new query
  const handlePostQuery = () => {
    if (newQuery.trim()) {
      const newId = queries.length + 1;
      const newQueryObj = { id: newId, question: newQuery, response: null }; // No response initially
      setQueries([newQueryObj, ...queries]); // Add the new query at the top
      setNewQuery(''); // Clear input field
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">My Personal Queries</h2>

      {/* Input field to post a new query */}
      <div className="mb-6">
        <textarea
          value={newQuery}
          onChange={(e) => setNewQuery(e.target.value)}
          className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ask your query..."
        />
        <button
          onClick={handlePostQuery}
          className="mt-3 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
        >
          Post Query
        </button>
      </div>

      {/* List of posted queries (Personal view) */}
      <div className="space-y-6">
        {queries.map((query) => (
          <div key={query.id} className="p-4 bg-gray-100 rounded-lg shadow-sm">
            <p className="text-lg font-semibold">{query.question}</p>
            {query.response ? (
              <p className="text-sm text-green-500">Response: {query.response}</p>
            ) : (
              <p className="text-sm text-gray-500">No response yet</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

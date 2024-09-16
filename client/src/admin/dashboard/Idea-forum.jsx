import React, { useState } from 'react';

// Sample data for initial ideas
const initialIdeas = [
  { id: 1, content: 'Introduce a music festival event.', upvotes: 5 },
  { id: 2, content: 'Host a technology hackathon.', upvotes: 8 },
  { id: 3, content: 'Add an art exhibition for students.', upvotes: 3 },
];

export default function IdeaForum() {
  const [ideas, setIdeas] = useState(initialIdeas);
  const [newIdea, setNewIdea] = useState('');

  // Handle posting a new idea
  const handlePostIdea = () => {
    if (newIdea.trim()) {
      const newId = ideas.length + 1;
      const newIdeaObj = { id: newId, content: newIdea, upvotes: 0 };
      setIdeas([newIdeaObj, ...ideas]);
      setNewIdea(''); // Clear the input field
    }
  };

  // Handle upvoting an idea
  const handleUpvote = (id) => {
    const updatedIdeas = ideas.map(idea =>
      idea.id === id ? { ...idea, upvotes: idea.upvotes + 1 } : idea
    );
    setIdeas(updatedIdeas);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Idea Forum</h2>

      {/* Input field for new idea */}
      <div className="mb-6">
        <textarea
          value={newIdea}
          onChange={(e) => setNewIdea(e.target.value)}
          className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Share your idea..."
        />
        <button
          onClick={handlePostIdea}
          className="mt-3 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
        >
          Post Idea
        </button>
      </div>

      {/* Display posted ideas */}
      <div className="space-y-6">
        {ideas.map((idea) => (
          <div key={idea.id} className="p-4 bg-gray-100 rounded-lg shadow-sm flex justify-between items-center">
            <p className="text-lg">{idea.content}</p>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleUpvote(idea.id)}
                className="text-blue-500 hover:text-blue-600"
              >
                Upvote
              </button>
              <span className="text-gray-700">{idea.upvotes}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import RatingChart from './RatingChart';

function App() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedback = { name, rating: parseInt(rating), comment };
    setFeedbacks([...feedbacks, newFeedback]);
    setName('');
    setRating('');
    setComment('');
  };

  return (
     <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Customer Feedback System</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required /><br /><br />
        <input type="number" placeholder="Rating (1-5)" value={rating} onChange={(e) => setRating(e.target.value)} min="1" max="5" required /><br /><br />
        <textarea placeholder="Comment" value={comment} onChange={(e) => setComment(e.target.value)} required></textarea><br /><br />
        <button type="submit">Submit Feedback</button>
      </form>
      <RatingChart feedbacks={feedbacks} />
      <h2>All Feedbacks</h2>
      <ul>
        {feedbacks.map((fb, index) => (
          <li key={index}>
            <strong>{fb.name}</strong> - Rating: {fb.rating}<br />
            {fb.comment}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

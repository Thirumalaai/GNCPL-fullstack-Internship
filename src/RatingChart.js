import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function RatingChart({ feedbacks = [] }) {
  const ratingCounts = [0, 0, 0, 0, 0];

  feedbacks.forEach((fb) => {
    const rating = parseInt(fb.rating);
    if (!isNaN(rating) && rating >= 1 && rating <= 5) {
      ratingCounts[rating - 1]++;
    }
  });

  const data = {
    labels: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'],
    datasets: [
      {
        label: 'Number of Ratings',
        data: ratingCounts,
        backgroundColor: 'teal',
      },
    ],
  };

  return (
    <div style={{ width: '400px', marginTop: '20px' }}>
      <Bar data={data} />
    </div>
  );
}

export default RatingChart;

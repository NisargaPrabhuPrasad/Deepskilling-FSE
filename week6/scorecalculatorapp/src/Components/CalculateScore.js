import React from 'react';

function CalculateScore() {
  const name = "Nisarga";
  const school = "Delhi Public School";
  const total = 450;
  const goal = 500;

  const average = ((total / goal) * 100).toFixed(2);

  return (
    <div>
      <h2>Student Score Report</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>School:</strong> {school}</p>
      <p><strong>Total Marks:</strong> {total}</p>
      <p><strong>Goal Marks:</strong> {goal}</p>
      <p><strong>Average Score:</strong> {average}%</p>
    </div>
  );
}

export default CalculateScore;

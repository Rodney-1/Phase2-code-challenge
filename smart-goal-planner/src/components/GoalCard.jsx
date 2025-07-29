import React from 'react';

function daysBetween(dateStr) {
  return Math.ceil((new Date(dateStr) - new Date()) / (1000 * 60 * 60 * 24));
}

const GoalCard = ({ goal, onDeleteGoal }) => {
  const { id, name, targetAmount, savedAmount, category, deadline } = goal;
  const percent = Math.min(100, (savedAmount / targetAmount) * 100).toFixed(1);
  const daysLeft = daysBetween(deadline);
  const isComplete = savedAmount >= targetAmount;
  const isClose = daysLeft <= 30 && daysLeft >= 0 && !isComplete;
  const isOverdue = daysLeft < 0 && !isComplete;

  return (
    <div className={`goal-card`}>
      <h3>{name}</h3>
      <button onClick={() => onDeleteGoal(id)}>Delete</button>
    </div>
  );
};

export default GoalCard;
